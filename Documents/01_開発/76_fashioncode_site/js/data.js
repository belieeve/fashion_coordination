// ========================================
// 手持ちアイテムデータ（2026年時点）
// ========================================

const DEFAULT_WARDROBE = [
  // === アウター ===
  { id: 'o01', category: 'outer', brand: 'JOURNAL STANDARD relume', name: 'チェスターコート', color: 'ネイビー', size: 'M', season: ['autumn', 'winter'], tags: ['きれいめ', 'コート'] },
  { id: 'o02', category: 'outer', brand: 'NANO UNIVERSE', name: 'ウールライクダウンジャケット', color: 'チャコール', size: 'L', season: ['winter'], tags: ['ダウン', '防寒'] },
  { id: 'o03', category: 'outer', brand: 'UNIQLO', name: 'ハイブリッドダウンパーカ', color: 'ブラック', size: 'S', season: ['winter'], tags: ['ダウン', '防寒'] },
  { id: 'o04', category: 'outer', brand: '無印良品', name: '防風撥水 中わたフードジャケット', color: 'ブラック', size: 'S', season: ['autumn', 'winter'], tags: ['防風', '実用'] },
  { id: 'o05', category: 'outer', brand: 'WORKMAN Colors', name: 'スエードショートジャケット', color: 'ブラック', size: 'M', season: ['autumn', 'spring'], tags: ['カジュアル'] },
  { id: 'o06', category: 'outer', brand: '無印良品', name: 'カポック混モールスキンカバーオール', color: 'ブラック', size: 'S', season: ['autumn', 'spring'], tags: ['きれいめ', 'ワーク'] },
  { id: 'o07', category: 'outer', brand: 'SHAKA WeAR', name: 'MA-1', color: 'ブラック', size: 'M', season: ['autumn', 'spring'], tags: ['カジュアル', 'MA-1'] },
  { id: 'o08', category: 'outer', brand: 'BLUE ZONE', name: 'マウンテンパーカー', color: '-', size: 'M', season: ['spring', 'autumn'], tags: ['アウトドア'] },
  { id: 'o09', category: 'outer', brand: 'UNIQLO', name: 'フーデッドブルゾン', color: 'ブラック', size: 'L', season: ['spring', 'autumn'], tags: ['カジュアル'] },
  { id: 'o10', category: 'outer', brand: 'UNIQLO', name: 'ウインドプルーフスタンドブルゾン', color: 'ブラック', size: 'M', season: ['spring', 'autumn'], tags: ['防風'] },
  { id: 'o11', category: 'outer', brand: 'UNIQLO', name: 'パフテックコンパクトベスト', color: 'ブラック', size: 'S', season: ['autumn', 'winter'], tags: ['ベスト', 'レイヤード'] },
  { id: 'o12', category: 'outer', brand: 'Bershka', name: 'ボアコーデュロイジャケット', color: '-', size: 'S', season: ['autumn', 'winter'], tags: ['カジュアル'] },
  { id: 'o13', category: 'outer', brand: 'Bershka', name: 'ボアデニムジャケット', color: '-', size: 'S', season: ['autumn', 'spring'], tags: ['カジュアル', 'デニム'] },
  { id: 'o14', category: 'outer', brand: 'BANANA REPUBLIC', name: 'カーディガン', color: '-', size: 'XS', season: ['spring', 'autumn'], tags: ['きれいめ', 'カーディガン'] },

  // === トップス ===
  { id: 't01', category: 'tops', brand: 'UNIQLO', name: 'ブラッシュドスウェット ハーフジップ', color: 'ダークグレー', size: 'M', season: ['autumn', 'winter'], tags: ['スウェット', 'ハーフジップ'] },
  { id: 't02', category: 'tops', brand: 'UNIQLO', name: 'オーバーサイズスウェット', color: 'ネイビー', size: 'M', season: ['autumn', 'winter', 'spring'], tags: ['スウェット'] },
  { id: 't03', category: 'tops', brand: 'UNIQLO', name: 'オーバーサイズスウェット', color: 'ブラック', size: 'M', season: ['autumn', 'winter', 'spring'], tags: ['スウェット'] },
  { id: 't04', category: 'tops', brand: 'UNIQLO', name: 'ソフトニットフリース モックネック', color: 'ダークグレー', size: 'M', season: ['autumn', 'winter'], tags: ['フリース', 'モックネック'] },
  { id: 't05', category: 'tops', brand: 'UNIQLO', name: 'ソフトニットフリース クルーネック', color: 'ブラック', size: 'M', season: ['autumn', 'winter'], tags: ['フリース'] },
  { id: 't06', category: 'tops', brand: 'UNIQLO', name: 'ソフトニットフリース クルーネック', color: 'ホワイト', size: 'M', season: ['autumn', 'winter'], tags: ['フリース'] },
  { id: 't07', category: 'tops', brand: 'UNIQLO', name: 'スフレヤーン クルーネックセーター', color: 'ホワイト', size: 'L', season: ['autumn', 'winter'], tags: ['ニット', 'きれいめ'] },
  { id: 't08', category: 'tops', brand: 'UNIQLO', name: 'ウォッシャブルミラノリブ', color: 'グレー', size: 'L', season: ['autumn', 'winter', 'spring'], tags: ['ニット', 'きれいめ'] },
  { id: 't09', category: 'tops', brand: 'UNIQLO', name: 'ウォッシャブルミラノリブ', color: 'ネイビー', size: 'M', season: ['autumn', 'winter', 'spring'], tags: ['ニット', 'きれいめ'] },
  { id: 't10', category: 'tops', brand: 'UNIQLO', name: 'メリノクルーネックセーター', color: 'グレー', size: 'M', season: ['autumn', 'winter'], tags: ['ニット', 'きれいめ'] },
  { id: 't11', category: 'tops', brand: 'GU', name: 'デニムオーバーサイズT', color: 'ブルー', size: 'M', season: ['summer'], tags: ['Tシャツ', 'デニム'] },
  { id: 't12', category: 'tops', brand: 'UNIQLO', name: 'エアリズムコットン 長袖T', color: 'ホワイト', size: 'M', season: ['spring', 'autumn'], tags: ['カットソー', 'インナー'] },
  { id: 't13', category: 'tops', brand: 'UNIQLO', name: 'エアリズムコットン 長袖T', color: 'ブラック', size: 'M', season: ['spring', 'autumn'], tags: ['カットソー', 'インナー'] },
  { id: 't14', category: 'tops', brand: 'UNIQLO', name: 'エアリズムコットン オーバーサイズT 5分袖', color: 'ホワイト', size: 'M', season: ['summer'], tags: ['Tシャツ'] },
  { id: 't15', category: 'tops', brand: 'UNIQLO', name: 'エアリズムコットン オーバーサイズT 5分袖', color: 'ブラック', size: 'M', season: ['summer'], tags: ['Tシャツ'] },
  { id: 't16', category: 'tops', brand: 'UNIQLO', name: 'ジャージーオーバーサイズシャツ', color: 'オリーブ', size: 'M', season: ['spring', 'autumn'], tags: ['シャツ'] },
  { id: 't17', category: 'tops', brand: 'UNIQLO', name: 'ツイルワーク オーバーサイズシャツ', color: 'ネイビー', size: 'S', season: ['spring', 'autumn'], tags: ['シャツ', 'ワーク'] },
  { id: 't18', category: 'tops', brand: 'UNIQLO', name: 'ユーティリティ オーバーサイズシャツ', color: 'ダークグレー', size: 'M', season: ['spring', 'autumn'], tags: ['シャツ'] },
  { id: 't19', category: 'tops', brand: 'GU', name: 'テクスチャー オープンカラーシャツ', color: 'ブラック', size: 'M', season: ['spring', 'summer'], tags: ['シャツ', 'オープンカラー'] },
  { id: 't20', category: 'tops', brand: 'UNIQLO', name: '極暖ヒートテック Vネック', color: 'ブラック', size: 'S', season: ['winter'], tags: ['インナー', 'ヒートテック'] },
  { id: 't21', category: 'tops', brand: 'UNIQLO', name: '超極暖ヒートテック クルーネック', color: '-', size: 'S', season: ['winter'], tags: ['インナー', 'ヒートテック'] },
  { id: 't22', category: 'tops', brand: 'UNIQLO', name: '極暖ヒートテック カシミヤブレンド', color: 'ブラック', size: 'S', season: ['winter'], tags: ['インナー', 'ヒートテック'] },
  { id: 't23', category: 'tops', brand: 'ワークマン', name: 'ユーティリティーポケットシャツジャケット', color: 'ブラウン', size: 'M', season: ['spring', 'autumn'], tags: ['シャツジャケット'] },

  // === パンツ ===
  { id: 'p01', category: 'pants', brand: 'UNIQLO', name: 'ウォームスマートパンツ', color: 'ダークグレー', size: '-', season: ['autumn', 'winter'], tags: ['スラックス', 'きれいめ'] },
  { id: 'p02', category: 'pants', brand: 'UNIQLO', name: 'ウォームスマートパンツ', color: 'ブラック', size: '-', season: ['autumn', 'winter'], tags: ['スラックス', 'きれいめ'] },
  { id: 'p03', category: 'pants', brand: 'UNIQLO', name: 'イージーワイドテーパード', color: 'ブラック', size: 'XS', season: ['autumn', 'winter'], tags: ['テーパード'] },
  { id: 'p04', category: 'pants', brand: 'UNIQLO', name: 'イージーワイドテーパード', color: 'ダークブラウン', size: 'XS', season: ['autumn', 'winter'], tags: ['テーパード'] },
  { id: 'p05', category: 'pants', brand: 'GU', name: 'キャロットスラックス', color: 'ブラック', size: 'XS', season: ['spring', 'autumn'], tags: ['スラックス', 'きれいめ'] },
  { id: 'p06', category: 'pants', brand: 'GU', name: 'キャロットスラックス', color: 'ライトグレー', size: 'XS', season: ['spring', 'autumn'], tags: ['スラックス', 'きれいめ'] },
  { id: 'p07', category: 'pants', brand: 'GU', name: 'パフスウェット キャロットパンツ', color: 'ブラック', size: 'XS', season: ['spring', 'autumn'], tags: ['スウェットパンツ'] },
  { id: 'p08', category: 'pants', brand: 'UNIQLO', name: 'タックワイドテーパード', color: 'ブラック', size: 'XS', season: ['spring', 'autumn'], tags: ['テーパード'] },
  { id: 'p09', category: 'pants', brand: '無印良品', name: '風を通すタックテーパード', color: 'ブラック', size: 'S', season: ['summer'], tags: ['テーパード', '夏用'] },
  { id: 'p10', category: 'pants', brand: 'UNIQLO', name: 'ギアパンツ', color: 'ブラック', size: 'S', season: ['summer'], tags: ['機能性'] },

  // === 靴 ===
  { id: 's01', category: 'shoes', brand: 'New Balance', name: '996', color: 'グレー', size: '-', season: ['all'], tags: ['スニーカー', 'きれいめ'] },
  { id: 's02', category: 'shoes', brand: 'GU', name: 'ふかふかスニーカー', color: 'オールブラック', size: '-', season: ['all'], tags: ['スニーカー'] },
  { id: 's03', category: 'shoes', brand: 'GU', name: 'レザーフラットローファー', color: 'ブラック', size: '-', season: ['spring', 'autumn'], tags: ['ローファー', 'きれいめ'] },
  { id: 's04', category: 'shoes', brand: 'NIKE', name: 'エアマックス アルファ トレーナー6', color: 'ネイビー', size: '-', season: ['all'], tags: ['スニーカー', 'スポーツ'] },

  // === バッグ ===
  { id: 'b01', category: 'bags', brand: 'NIKE', name: 'テック ヒップパック', color: 'ブラック', size: '-', season: ['all'], tags: ['ボディバッグ'] },
  { id: 'b02', category: 'bags', brand: 'GU', name: 'ナイロンツイルバックパック', color: 'ブラック', size: '-', season: ['all'], tags: ['バックパック'] },
  { id: 'b03', category: 'bags', brand: 'THE NORTH FACE', name: 'ヴォルト', color: 'ブラック', size: '-', season: ['all'], tags: ['バックパック'] },
  { id: 'b04', category: 'bags', brand: 'UNIQLO', name: 'ファンクショナルバックパック', color: 'ブラック', size: '-', season: ['all'], tags: ['バックパック'] },
  { id: 'b05', category: 'bags', brand: 'STANDARD SUPPLY', name: 'ナイロンショルダー', color: 'ブラック', size: '-', season: ['all'], tags: ['ショルダー'] },
  { id: 'b06', category: 'bags', brand: 'PORTER', name: 'TANKER デイパック', color: '-', size: '-', season: ['all'], tags: ['バックパック', 'きれいめ'] },
  { id: 'b07', category: 'bags', brand: 'SLOW', name: 'rubono マルチポーチ LL', color: 'ネイビー', size: '-', season: ['all'], tags: ['ポーチ', 'きれいめ'] },

  // === 小物 ===
  { id: 'a01', category: 'accessories', brand: 'CASIO', name: 'G-SHOCK GW-M5610U', color: '-', size: '-', season: ['all'], tags: ['時計'] },
  { id: 'a02', category: 'accessories', brand: 'Xiaomi', name: 'Redmi Watch 5 Active', color: '-', size: '-', season: ['all'], tags: ['時計', 'スマートウォッチ'] },
  { id: 'a03', category: 'accessories', brand: 'JINS', name: 'SCREEN FOR SLEEP', color: '-', size: '-', season: ['all'], tags: ['メガネ'] },
  { id: 'a04', category: 'accessories', brand: 'UNIQLO', name: 'サングラス（ボストン）', color: '-', size: '-', season: ['spring', 'summer'], tags: ['サングラス'] },
  { id: 'a05', category: 'accessories', brand: 'UNIQLO', name: 'サングラス（スクエア）', color: '-', size: '-', season: ['spring', 'summer'], tags: ['サングラス'] },
  { id: 'a06', category: 'accessories', brand: 'UNIQLO', name: 'UVカットキャップ', color: '-', size: '-', season: ['spring', 'summer'], tags: ['帽子'] },
  { id: 'a07', category: 'accessories', brand: '-', name: 'サファリハット', color: '-', size: '-', season: ['summer'], tags: ['帽子'] },
  { id: 'a08', category: 'accessories', brand: 'ハリスツイード', name: 'マフラー', color: 'グレー', size: '-', season: ['winter'], tags: ['マフラー'] },
  { id: 'a09', category: 'accessories', brand: 'ハリスツイード', name: 'マフラー', color: 'ブラック', size: '-', season: ['winter'], tags: ['マフラー'] },
  { id: 'a10', category: 'accessories', brand: 'UNIQLO', name: 'ネックゲイター', color: '-', size: '-', season: ['winter'], tags: ['防寒'] },
  { id: 'a11', category: 'accessories', brand: '無印良品', name: 'ベジタブルタンニンレザーベルト（細幅）', color: '-', size: '-', season: ['all'], tags: ['ベルト'] },
];

// ========================================
// カテゴリ定義
// ========================================
const CATEGORIES = {
  outer: { label: 'アウター', icon: '🧥' },
  tops: { label: 'トップス', icon: '👕' },
  pants: { label: 'パンツ', icon: '👖' },
  shoes: { label: '靴', icon: '👟' },
  bags: { label: 'バッグ', icon: '👜' },
  accessories: { label: '小物', icon: '⌚' },
};

// ========================================
// 季節定義
// ========================================
const SEASONS = {
  spring: { label: '春', months: [3, 4, 5], tempRange: '10〜20℃' },
  summer: { label: '夏', months: [6, 7, 8], tempRange: '25℃〜' },
  autumn: { label: '秋', months: [9, 10, 11], tempRange: '10〜20℃' },
  winter: { label: '冬', months: [12, 1, 2], tempRange: '〜10℃' },
};

// ========================================
// シーン定義
// ========================================
const SCENES = {
  work: { label: '仕事', icon: '💼', description: 'オフィス・取引先訪問' },
  family: { label: '家族外出', icon: '👨‍👩‍👦', description: '子どもと公園・買い物' },
  casual: { label: 'カジュアル', icon: '☕', description: '近所・友人と' },
  date: { label: 'デート', icon: '🍽️', description: '妻との外食・記念日' },
};

// ========================================
// コーデ提案データ
// ========================================
const COORDINATE_PRESETS = [
  // === 冬 ===
  {
    id: 'c01',
    season: 'winter',
    scene: 'work',
    level: 'best',
    name: '冬の仕事コーデ【松】',
    items: {
      outer: 'o01',
      tops: 't09',
      inner: 't20',
      pants: 'p01',
      shoes: 's03',
      bag: 'b06',
      accessory: 'a08',
    },
    reason: 'チェスターコート×ミラノリブの王道きれいめ。ネイビー×グレーで大人の信頼感。ローファーで足元に品格。',
    bodyTip: 'チェスターコートの肩線がなで肩をカバー。ミラノリブのハリ感で上半身に適度なボリューム。',
  },
  {
    id: 'c02',
    season: 'winter',
    scene: 'work',
    level: 'good',
    name: '冬の仕事コーデ【竹】',
    items: {
      outer: 'o04',
      tops: 't08',
      inner: 't22',
      pants: 'p02',
      shoes: 's01',
      bag: 'b04',
    },
    reason: '防風ジャケット×ミラノリブで実用性とキレイめを両立。NB996のグレーがコーデの抜けに。',
    bodyTip: 'ジャストサイズのSで肩が逃げない。ブラック×グレーの2色で統一感。',
  },
  {
    id: 'c03',
    season: 'winter',
    scene: 'work',
    level: 'minimum',
    name: '冬の仕事コーデ【梅】',
    items: {
      outer: 'o03',
      tops: 't05',
      inner: 't20',
      pants: 'p02',
      shoes: 's02',
    },
    reason: 'ダウンパーカ×フリースのミニマル構成。オールブラックで簡潔に。',
    bodyTip: 'ダウンパーカSサイズで身幅が合う。フリースのクルーネックでスッキリ。',
  },
  {
    id: 'c04',
    season: 'winter',
    scene: 'family',
    level: 'best',
    name: '冬の家族外出コーデ【松】',
    items: {
      outer: 'o02',
      tops: 't01',
      inner: 't22',
      pants: 'p03',
      shoes: 's01',
      bag: 'b03',
      accessory: 'a09',
    },
    reason: 'ウールライクダウンで防寒しつつ上品さキープ。ハーフジップで動きやすく子どもとの外遊びにも対応。',
    bodyTip: 'ダウンのボリュームが細身体型を自然にカバー。テーパードパンツでスッキリ。',
  },
  {
    id: 'c05',
    season: 'winter',
    scene: 'family',
    level: 'good',
    name: '冬の家族外出コーデ【竹】',
    items: {
      outer: 'o03',
      tops: 't04',
      inner: 't20',
      pants: 'p03',
      shoes: 's02',
      bag: 'b01',
    },
    reason: 'ダウンパーカ×モックネックでカジュアルだが大人っぽく。ボディバッグで身軽に動ける。',
    bodyTip: 'モックネックが首元の貧弱さをカバー。ダウンSサイズでジャストフィット。',
  },
  {
    id: 'c06',
    season: 'winter',
    scene: 'casual',
    level: 'best',
    name: '冬のカジュアルコーデ【松】',
    items: {
      outer: 'o01',
      tops: 't07',
      inner: 't20',
      pants: 'p04',
      shoes: 's01',
      accessory: 'a08',
    },
    reason: 'チェスターコート×白ニットで冬の定番きれいめカジュアル。ダークブラウンパンツで色の変化を。',
    bodyTip: '白ニットで顔周りが明るく。チェスターの肩線が骨格をカバー。',
  },
  {
    id: 'c07',
    season: 'winter',
    scene: 'date',
    level: 'best',
    name: '冬のデートコーデ【松】',
    items: {
      outer: 'o01',
      tops: 't10',
      inner: 't22',
      pants: 'p01',
      shoes: 's03',
      bag: 'b07',
      accessory: 'a08',
    },
    reason: 'チェスターコート×メリノニット×ローファーの大人フォーマル。妻も安心の品格コーデ。',
    bodyTip: 'メリノウールの上質さが顔周りの印象を格上げ。スマートパンツのセンタープレスで脚長効果。',
  },

  // === 春 ===
  {
    id: 'c08',
    season: 'spring',
    scene: 'work',
    level: 'best',
    name: '春の仕事コーデ【松】',
    items: {
      outer: 'o06',
      tops: 't09',
      pants: 'p05',
      shoes: 's03',
      bag: 'b06',
    },
    reason: 'カバーオール×ミラノリブできちんと感。ブラック×ネイビーのトーンonトーンが大人。',
    bodyTip: 'カバーオールSサイズが肩にフィット。キャロットスラックスで脚線きれい。',
  },
  {
    id: 'c09',
    season: 'spring',
    scene: 'work',
    level: 'good',
    name: '春の仕事コーデ【竹】',
    items: {
      tops: 't17',
      pants: 'p05',
      shoes: 's01',
      bag: 'b04',
    },
    reason: 'ツイルワークシャツ1枚で十分。ネイビー×ブラックのシンプル構成。',
    bodyTip: 'Sサイズのシャツで肩が余らない。',
  },
  {
    id: 'c10',
    season: 'spring',
    scene: 'family',
    level: 'best',
    name: '春の家族外出コーデ【松】',
    items: {
      outer: 'o14',
      tops: 't12',
      pants: 'p06',
      shoes: 's01',
      bag: 'b05',
    },
    reason: 'カーディガン×白カットソー×ライトグレーで春らしい軽さ。NB996で動きやすさも確保。',
    bodyTip: 'XSカーディガンで肩が止まる。ライトグレーパンツで重くならない。',
  },
  {
    id: 'c11',
    season: 'spring',
    scene: 'casual',
    level: 'best',
    name: '春のカジュアルコーデ【松】',
    items: {
      outer: 'o10',
      tops: 't12',
      pants: 'p08',
      shoes: 's01',
    },
    reason: 'スタンドブルゾン×白カットソーの定番春カジュアル。タックワイドテーパードで今っぽさも。',
    bodyTip: 'スタンドカラーが首元に高さを出し、なで肩の印象を軽減。',
  },
  {
    id: 'c12',
    season: 'spring',
    scene: 'date',
    level: 'best',
    name: '春のデートコーデ【松】',
    items: {
      outer: 'o06',
      tops: 't08',
      pants: 'p06',
      shoes: 's03',
      bag: 'b07',
    },
    reason: 'カバーオール×ミラノリブ×ライトグレーで春の大人きれいめ。ローファーで品格。',
    bodyTip: 'カバーオールの構築的なシルエットが上半身を整える。ライトグレーで軽やかさ。',
  },

  // === 夏 ===
  {
    id: 'c13',
    season: 'summer',
    scene: 'work',
    level: 'best',
    name: '夏の仕事コーデ【松】',
    items: {
      tops: 't14',
      pants: 'p09',
      shoes: 's01',
      bag: 'b04',
    },
    reason: 'エアリズム白T×タックテーパードのミニマルスタイル。清潔感最重視。',
    bodyTip: '白Tで顔周りが明るく。タックテーパードで腰回りに程よいゆとり。',
  },
  {
    id: 'c14',
    season: 'summer',
    scene: 'family',
    level: 'best',
    name: '夏の家族外出コーデ【松】',
    items: {
      tops: 't15',
      pants: 'p10',
      shoes: 's02',
      bag: 'b01',
      accessory: 'a06',
    },
    reason: '黒T×ギアパンツで動きやすく。キャップでアクティブ感。全身黒でも素材感で重くならない。',
    bodyTip: 'ギアパンツの機能素材が軽くて動きやすい。キャップで日差し対策も。',
  },
  {
    id: 'c15',
    season: 'summer',
    scene: 'casual',
    level: 'best',
    name: '夏のカジュアルコーデ【松】',
    items: {
      tops: 't19',
      pants: 'p09',
      shoes: 's01',
      accessory: 'a04',
    },
    reason: 'オープンカラーシャツ×タックテーパードで大人の夏カジュアル。ボストンサングラスでアクセント。',
    bodyTip: 'オープンカラーの抜け感がこなれた印象に。タックテーパードでだらしなく見えない。',
  },
  {
    id: 'c16',
    season: 'summer',
    scene: 'date',
    level: 'best',
    name: '夏のデートコーデ【松】',
    items: {
      tops: 't14',
      pants: 'p09',
      shoes: 's03',
      bag: 'b07',
      accessory: 'a04',
    },
    reason: '白T×テーパード×ローファーの夏きれいめ最適解。レザーポーチで大人感。',
    bodyTip: '白Tの清潔感×ローファーの品格。シンプルだが手抜きに見えない。',
  },

  // === 秋 ===
  {
    id: 'c17',
    season: 'autumn',
    scene: 'work',
    level: 'best',
    name: '秋の仕事コーデ【松】',
    items: {
      outer: 'o06',
      tops: 't09',
      pants: 'p01',
      shoes: 's03',
      bag: 'b06',
    },
    reason: 'カバーオール×ミラノリブの秋定番。ネイビー×グレーの大人配色。',
    bodyTip: 'カバーオールの肩線がなで肩を矯正。スマートパンツのセンタープレスで全体を引き締め。',
  },
  {
    id: 'c18',
    season: 'autumn',
    scene: 'family',
    level: 'best',
    name: '秋の家族外出コーデ【松】',
    items: {
      outer: 'o05',
      tops: 't02',
      pants: 'p03',
      shoes: 's01',
      bag: 'b05',
    },
    reason: 'スエードジャケット×ネイビースウェットで秋らしい温かみ。テーパードで脚線スッキリ。',
    bodyTip: 'ショートジャケットの丈感が胴長をカバー。スウェットのゆとりで動きやすい。',
  },
  {
    id: 'c19',
    season: 'autumn',
    scene: 'casual',
    level: 'best',
    name: '秋のカジュアルコーデ【松】',
    items: {
      outer: 'o07',
      tops: 't13',
      pants: 'p08',
      shoes: 's02',
    },
    reason: 'MA-1×黒カットソーのシンプルモノトーン。タックワイドテーパードでバランス。',
    bodyTip: 'MA-1のコンパクトな丈が胴長を目立たせない。',
  },
  {
    id: 'c20',
    season: 'autumn',
    scene: 'date',
    level: 'best',
    name: '秋のデートコーデ【松】',
    items: {
      outer: 'o01',
      tops: 't10',
      pants: 'p01',
      shoes: 's03',
      bag: 'b07',
    },
    reason: 'チェスターコート×メリノニットの秋冬王道。ローファーで大人の余裕。',
    bodyTip: 'チェスターの構築的な肩が骨格を補正。グレーニットで顔色を良く見せる。',
  },
];

// ========================================
// スタイリングルール
// ========================================
const STYLING_RULES = {
  absoluteNG: [
    '「若い」「緩い」「軽い」印象になるもの',
    'オーバーサイズ前提設計',
    'トレンド主張が強く寿命が短い服',
    'ストリート／ワーク／アメカジ強め',
    'スナップ映え優先で日常不向きな服',
  ],
  brandPolicy: {
    axis: 'UNITED ARROWS（特にgreen label relaxing）の設計思想が基準',
    reason: 'なで肩・細身でも肩線が破綻しにくく、38歳が無理なく成立する',
    uniqloGu: 'UA基準を満たす場合のみ採用可',
  },
  itemRules: {
    outer: [
      'UA基準（肩が止まり、丈と身幅が中庸）を最優先',
      '大人の格・肩の安定感を最重要視',
      'UNIQLO/GUは形がUA基準に近い場合のみ可',
    ],
    tops: [
      'UAスタッフスナップで違和感のない形のみ',
      '顔に近いほどサイズと素材を重視',
      '短丈・装飾過多・オーバーサイズは禁止',
    ],
    pants: [
      'UA／green label基準のテーパード〜中庸',
      'XS/Sが存在する設計を優先',
      'UNIQLO/GUはサイズ精度が合えば可',
    ],
    shoes: [
      'UAコーデの邪魔をしない無地・低主張',
      'スポーティ・ロゴ強めは原則不可',
    ],
  },
  checklist: [
    'アウターで大人の格が出ているか',
    '肩が「乗っていて、止まっている」か',
    '松竹梅が成立しているか',
    'パンツはサイズ最優先か',
    '靴・バッグが出しゃばっていないか',
    '38歳パパが無理していないのに、ちゃんとして見えるか',
  ],
  grooming: {
    ng: [
      '眉／鼻毛の放置',
      'テカリ・乾燥放置',
      '寝癖・パサ髪',
      '厚塗りメンズメイク',
    ],
    priority: '洗顔・保湿・UVが最優先',
  },
  referenceActors: [
    { name: '西島秀俊', point: 'なで肩でも成立する上品なシルエット' },
    { name: '高橋一生', point: '細身を活かしたシャープなきれいめ' },
    { name: '松坂桃李', point: '色数を抑えた清潔感のある大人スタイル' },
  ],
};
