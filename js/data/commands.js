/* js/data/commands.js */

export const COMMANDS_DATA = [
  // --- 基本コマンド (basic) ---
  {
    id: 'basic',
    name: '/gamemode',
    category: 'basic',
    categoryLabel: '基本 (きほん)',
    emoji: '⚙️',
    description: 'ゲームモード（クリエイティブやサバイバルなど）をいつでも切りかえられます。'
  },
  {
    id: 'basic',
    name: '/time',
    category: 'basic',
    categoryLabel: '基本 (きほん)',
    emoji: '☀️',
    description: 'ワールドの時間を一瞬で朝や夜、お昼、真夜中に変えられます。'
  },
  {
    id: 'basic',
    name: '/weather',
    category: 'basic',
    categoryLabel: '基本 (きほん)',
    emoji: '🌧️',
    description: '天気を「晴れ」「雨」「雷雨（かみなり）」に自由に変えられます。'
  },
  {
    id: 'basic',
    name: '/difficulty',
    category: 'basic',
    categoryLabel: '基本 (きほん)',
    emoji: '🛡️',
    description: 'ゲームの難易度（ピースフル・イージー・ノーマル・ハード）をいつでも変えられます。'
  },
  {
    id: 'basic',
    name: '/kill',
    category: 'basic',
    categoryLabel: '基本 (きほん)',
    emoji: '💀',
    description: '指定したプレイヤーや、まわりの特定のモブをたおすことができます。'
  },

  // --- アイテム (give) ---
  {
    id: 'give',
    name: '/give',
    category: 'give',
    categoryLabel: 'アイテム',
    emoji: '🎁',
    description: 'ダイヤモンドの剣やコマンドブロックなどのアイテムを、好きな数だけもらえます。'
  },
  {
    id: 'give',
    name: '/clear',
    category: 'give',
    categoryLabel: 'アイテム',
    emoji: '🧹',
    description: '自分やほかの人の手持ちアイテム（インベントリ）をすべて消去します。'
  },
  {
    id: 'give',
    name: '/enchant',
    category: 'give',
    categoryLabel: 'アイテム',
    emoji: '✨',
    description: '手に持っている武器や道具に、最強のエンチャント効果を一瞬で付与します。'
  },

  // --- モブ召喚 (summon) ---
  {
    id: 'summon',
    name: '/summon',
    category: 'summon',
    categoryLabel: 'モブ召喚',
    emoji: '👾',
    description: 'ウォーデンやエンダードラゴンなどのモブを、好きな場所に呼び出せます。'
  },

  // --- エフェクト (effect) ---
  {
    id: 'effect',
    name: '/effect',
    category: 'effect',
    categoryLabel: '効果 (エフェクト)',
    emoji: '⚡',
    description: '足が速くなる、無敵になる、透明になるなど、さまざまなステータス効果をつけます。'
  },

  // --- テレポート (teleport) ---
  {
    id: 'teleport',
    name: '/tp',
    category: 'teleport',
    categoryLabel: 'テレポート',
    emoji: '🚀',
    description: '指定した座標や、ほかのプレイヤーのいる場所に一瞬でワープできます。'
  },

  // --- 建築 (fill-clone) ---
  {
    id: 'fill-clone',
    name: '/fill',
    category: 'fill-clone',
    categoryLabel: '建築 (けんちく)',
    emoji: '🏗️',
    description: '指定した広い範囲に、ブロックをいっぱい敷き詰めたり、壁を作ったりします。'
  },
  {
    id: 'fill-clone',
    name: '/clone',
    category: 'fill-clone',
    categoryLabel: '建築 (けんちく)',
    emoji: '🧱',
    description: '自分が作ったお城などの建築物を、別の場所にそっくりそのままコピーします。'
  },

  // --- 実行 (execute) ---
  {
    id: 'execute',
    name: '/execute',
    category: 'execute',
    categoryLabel: '実行 (じっこう)',
    emoji: '🎯',
    description: '「モブがここにいたらコマンドを動かす」などの複雑な条件付きコマンドが作れます。'
  },

  // --- スコアボード (scoreboard) ---
  {
    id: 'scoreboard',
    name: '/scoreboard',
    category: 'scoreboard',
    categoryLabel: 'スコア・表示',
    emoji: '📊',
    description: 'ゲームの得点を数えたり、画面の右端にスコアを表示したりできます。'
  },

  // --- ゲームルール (gamerule) ---
  {
    id: 'gamerule',
    name: '/gamerule',
    category: 'gamerule',
    categoryLabel: 'ゲームルール',
    emoji: '🎮',
    description: '「死んでもアイテムを落とさない」「火が燃え広がらない」などのルールを変えます。'
  },

  // --- メッセージ・音 (message) ---
  {
    id: 'message',
    name: '/playsound',
    category: 'message',
    categoryLabel: '演出 (えんしゅつ)',
    emoji: '🔊',
    description: 'レベルアップの音や雷の音など、マイクラにあるさまざまな効果音を鳴らします。'
  },
  {
    id: 'message',
    name: '/particle',
    category: 'message',
    categoryLabel: '演出 (えんしゅつ)',
    emoji: '🌟',
    description: 'ハートマークや音符、炎など、キラキラした可愛いパーティクルを発生させます。'
  }
];
