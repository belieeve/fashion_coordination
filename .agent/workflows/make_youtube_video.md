---
description: MP3、画像、歌詞からYouTube動画を完全自動生成する（LRC作成機能付き）
---

1. ユーザーから「動画を作って」と依頼があった場合、以下の素材が揃っているか確認する。
   - `music.mp3` (音声ファイル)
   - `background.png` (またはjpg等の画像ファイル)
   - `lyrics_hiragana.txt` (ひらがな歌詞)
   - `lyrics.txt` (漢字歌詞)

2. 素材が不足している場合は、不足しているものをユーザーに要求する。特に歌詞は「ひらがな」と「漢字」の両方が必要であることを伝える。

3. 全ての素材が揃ったら、以下のコマンドを実行してLRCファイル(字幕)を生成する。
   ```bash
   python3 /Users/shin/Documents/03_YouTube/create_lrc.py <MP3ファイルのパス> <漢字歌詞ファイルのパス> --hiragana_path <ひらがな歌詞ファイルのパス>
   ```
   // turbo

4. LRCファイルの生成が完了・確認できたら、Remotionプロジェクトのディレクトリに移動し、動画生成プロセスを実行する（詳細は `Remotion自動動画制作指示.md` を参照）。
