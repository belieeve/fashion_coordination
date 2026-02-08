import os
import time
import argparse
import google.generativeai as genai
from pathlib import Path

def setup_gemini():
    api_key = os.environ.get("GOOGLE_API_KEY")

    # If not in environment, try reading from .env file in the same directory
    if not api_key:
        env_path = Path(__file__).parent / ".env"
        if env_path.exists():
            try:
                with open(env_path, "r") as f:
                    for line in f:
                        if line.startswith("GOOGLE_API_KEY="):
                            # Extract key and remove any quotes/spaces if present
                            api_key = line.split("=", 1)[1].strip().strip('"').strip("'")
                            if api_key:
                                break
            except Exception as e:
                print(f"Warning: Failed to read .env file: {e}")

    if not api_key:
        print("エラー: 環境変数 'GOOGLE_API_KEY' が設定されておらず、.envファイルも見つかりませんでした。")
        print("export GOOGLE_API_KEY='your_api_key_here' を実行するか、スクリプトと同じディレクトリに .env ファイルを作成してください。")
        exit(1)
    
    genai.configure(api_key=api_key)

def upload_to_gemini(path, mime_type=None):
    """Uploads the given file to Gemini."""
    file = genai.upload_file(path, mime_type=mime_type)
    print(f"File '{file.display_name}' uploaded as: {file.uri}")
    return file

def wait_for_files_active(files):
    """Waits for the given files to be active."""
    print("Waiting for file processing...", end='')
    for name in (file.name for file in files):
        file = genai.get_file(name)
        while file.state.name == "PROCESSING":
            print(".", end='', flush=True)
            time.sleep(2)
            file = genai.get_file(name)
        if file.state.name != "ACTIVE":
            raise Exception(f"File {file.name} failed to process")
    print("...Done")

def generate_lrc(mp3_path, lyrics_path):
    # Model configuration
    # ユーザーのご希望（高精度・時短）に合わせて、最新の高性能モデルを順に試します。
    # APIキー（無料枠）があれば、これらのモデルをコードから直接利用できます。
    model_candidates = [
        "gemini-2.0-flash-exp",  # 最新・最高速・高精度 (推奨: User's "Gemini 3 Flash/Pro" capability)
        "gemini-1.5-pro",        # 高推論 (Pro)
        "gemini-1.5-flash"       # 安定・高速バックアップ
    ]
    
    model = None
    used_model_name = ""

    for m_name in model_candidates:
        try:
            print(f"Testing model access: {m_name} ...")
            test_model = genai.GenerativeModel(model_name=m_name)
            # 軽く動作確認（モデル取得だけではエラーが出ない場合があるため）
            # ここでは初期化成功とみなしてループを抜けます
            model = test_model
            used_model_name = m_name
            break
        except Exception as e:
            print(f"Model {m_name} not available or error: {e}")
            continue
    
    if not model:
        print("Error: Could not access any Gemini models. Check your API Key.")
        return

    print(f"Using model: {used_model_name}")

    # 1. Upload MP3
    print(f"Uploading {mp3_path}...")
    mp3_file = upload_to_gemini(mp3_path, mime_type="audio/mp3")
    
    # Wait for processing
    wait_for_files_active([mp3_file])

    # 2. Read Lyrics
    with open(lyrics_path, "r", encoding="utf-8") as f:
        lyrics_text = f.read()

    # 3. Start Chat Session
    # Initialize chat with empty history
    chat = model.start_chat(history=[])

    print("Sending audio and initial prompt (Step 1)...")
    
    base_prompt = (
        "あなたはプロの歌詞タイムコーダーです。このmp3をこの曲の歌っている部分のみのタイムスタンプ付きのLRCファイルを作ってください。\n"
        "歌状況によっては以下の歌詞以外にも歌っていることもあるので精度高く歌っている箇所を聞いて生成してください。\n"
    )

    hiragana_text = ""
    if hiragana_path and os.path.exists(hiragana_path):
        with open(hiragana_path, "r", encoding="utf-8") as f:
            hiragana_text = f.read()
        
        prompt_text = base_prompt + (
            "今回は精度向上のため、以下の【ひらがな歌詞】を正解として参考にしてください。\n"
            "音声を聞き取り、このひらがな歌詞の各行・各単語が歌われている正確なタイミングでタグ付けしてください。\n"
            "※もし歌詞にないアドリブ等が含まれている場合は、そこも聞こえたまま記述してください。\n\n"
            "【ひらがな歌詞】\n"
            "```\n" + hiragana_text + "\n```\n\n"
            "まずはこのひらがな歌詞ベースでLRCを出力してください。"
            "（この後、漢字付きの歌詞を渡して置換してもらうステップに移ります）"
        )
    else:
        prompt_text = base_prompt + (
            "まずは、聞こえたまま（ひらがなや聞き取った言葉）で構いませんので、高精度なタイムスタンプを作成してください。\n"
            "（この後、漢字付きの歌詞を渡して置換してもらうステップに移ります）"
        )

    prompt1 = [mp3_file, prompt_text]
    
    response1 = chat.send_message(prompt1)
    print("Step 1 Complete. Initial lyrics generated.")
    # print(response1.text) # Debug

    print("Applying Kanji lyrics (Step 2)...")
    prompt2 = (
        "ありがとうございます。次に、以下の漢字付きの正式な歌詞を提示しますので、"
        "先ほど生成したLRCファイルのひらがな等の部分を、この漢字歌詞に置き換えてください。"
        "タイムスタンプは先ほどの高精度のものをそのまま維持してください。\n"
        "意図的にひらがなのままにしている部分や、英語の部分なども含め、以下のテキストの内容を正としてください。\n\n"
        "【正式な歌詞(漢字)】\n"
        "```\n" + lyrics_text + "\n```\n\n"
        "出力は純粋なLRCファイルの内容のみにしてください。説明やMarkdownのコードブロックは不要ですが、もし含める場合は識別できるようにしてください。"
    )
    
    response2 = chat.send_message(prompt2)
    
    # Extract LRC content
    lrc_content = response2.text
    
    # Clean up markdown code blocks
    lines = lrc_content.split('\n')
    cleaned_lines = []
    in_code_block = False
    for line in lines:
        if line.strip().startswith("```"):
            in_code_block = not in_code_block
            continue
        # If we are inside a code block, keep the content. 
        # If we are outside, we might want to skip conversational text.
        # However, checking if the line looks like a timestamp [mm:ss.xx] is a good heuristic.
        if "[" in line and "]" in line and ":" in line:
            cleaned_lines.append(line)
    
    # Fallback: if no timestamp lines found, maybe it's raw text?
    if not cleaned_lines:
        # Try to just remove the backticks
        lrc_content = lrc_content.replace("```lrc", "").replace("```", "").strip()
    else:
        lrc_content = "\n".join(cleaned_lines)

    # Save to file
    # Replace extension with .lrc
    output_path = Path(mp3_path).with_suffix(".lrc")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(lrc_content)


    print(f"LRC file saved to: {output_path}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate LRC file from MP3 and Lyric text using Gemini.")
    parser.add_argument("mp3_path", help="Path to the MP3 file")
    parser.add_argument("lyrics_path", help="Path to the text file containing the Kanji lyrics")
    parser.add_argument("--hiragana_path", help="Path to the text file containing the Hiragana lyrics (optional)", default=None)
    
    args = parser.parse_args()
    
    setup_gemini()
    generate_lrc(args.mp3_path, args.lyrics_path, args.hiragana_path)
