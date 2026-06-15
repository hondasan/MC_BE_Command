/* js/data/gamerules.js */

export const GAMERULES = [
  { id: 'keepInventory', name: '死んでもアイテムを持ったままにする', type: 'boolean', default: false, description: '「true」にすると、プレイヤーが死んでも持っているアイテムや経験値をその場に落とさなくなります。' },
  { id: 'mobGriefing', name: 'モブがブロックを壊すのを許可する', type: 'boolean', default: true, description: '「false」にすると、クリーパーの爆発で地面が壊れなくなったり、エンドマンがブロックを持ち上げなくなったりします。' },
  { id: 'doDaylightCycle', name: '時間が進むようにする', type: 'boolean', default: true, description: '「false」にすると、太陽や月が動かなくなり、ワールドの時間が固定されます。' },
  { id: 'doWeatherCycle', name: '天気が変わるようにする', type: 'boolean', default: true, description: '「false」にすると、雨や雷雨にならず、現在の天気がずっと続きます。' },
  { id: 'doMobSpawning', name: '自然にモブが生まれるようにする', type: 'boolean', default: true, description: '「false」にすると、暗闇でもゾンビなどの敵対モブや、牛などの友好モブが自然に生まれなくなります（スポナーや卵からは出せます）。' },
  { id: 'pvp', name: 'プレイヤー同士が攻撃し合えるようにする', type: 'boolean', default: true, description: '「false」にすると、プレイヤー同士がパンチや剣、弓矢などでダメージを与えられなくなります。' },
  { id: 'showCoordinates', name: '画面に座標を表示する', type: 'boolean', default: false, description: '「true」にすると、画面の左上に自分が今いる場所の座標（X, Y, Z）が表示されます。' },
  { id: 'tntExplodes', name: 'TNTが爆発するようにする', type: 'boolean', default: true, description: '「false」にすると、TNTに着火しても爆発しなくなります。' },
  { id: 'doFireTick', name: '火が広がるようにする', type: 'boolean', default: true, description: '「false」にすると、火がまわりの木ブロック等に燃え広がらなくなり、自然に消えることもありません。' },
  { id: 'naturalRegeneration', name: '満腹のときに体力が自動回復するようにする', type: 'boolean', default: true, description: '「false」にすると、お腹がいっぱいになってもダメージを受けた体力が自動的に回復しなくなります（ポーション等の回復は有効）。' },
  { id: 'doInsomnia', name: 'ファントムが生まれるようにする (不眠症)', type: 'boolean', default: true, description: '「false」にすると、何日もベッドで寝ていなくても、夜にファントムが出現しなくなります。' },
  { id: 'commandBlockOutput', name: 'コマンドブロックが動いたときのログを表示する', type: 'boolean', default: true, description: '「false」にすると、コマンドブロックが実行されたときのチャット欄へのメッセージ通知を非表示にします。' },
  { id: 'sendCommandFeedback', name: 'プレイヤーがコマンドを使ったときのログを表示する', type: 'boolean', default: true, description: '「false」にすると、プレイヤーがコマンドを使ったときの実行結果（例:「〜を与えました」）のログ通知を非表示にします。' },
  { id: 'doImmediateRespawn', name: '死んだときに「リスポーン画面」を出さずにすぐ生き返る', type: 'boolean', default: false, description: '「true」にすると、死んだ時に「ゲームオーバー」の画面が出ず、一瞬でリスポーン地点に復活します。' },
  { id: 'showDeathMessages', name: 'チャットに誰が死んだかのメッセージを表示する', type: 'boolean', default: true, description: '「false」にすると、プレイヤーや飼い犬などが死んだ時の「○○はクリーパーに爆破された」等のメッセージをチャットに出しません。' },
  { id: 'respawnBlocksExplode', name: 'オーバーワールド以外でリスポーンブロックが爆発する', type: 'boolean', default: true, description: '「false」にすると、ネザーでベッドを使ったり、オーバーワールドでリスポーンアンカーを使っても爆発しなくなります。' },
  { id: 'maxCommandChainLength', name: 'コマンドチェーンの最大長さ制限', type: 'number', default: 65536, description: 'チェーンコマンドブロックが一度に連鎖して実行できるコマンド数の最大制限です。' },
  { id: 'randomTickSpeed', name: '作物の成長スピード (ランダムティック)', type: 'number', default: 1, description: '農作物が育つ早さや、葉っぱが落ちる早さをコントロールします。「0」にすると成長が止まり、「1000」にすると一瞬で育ちます（基本は1または3）。' },
  { id: 'spawnRadius', name: 'リスポーンするエリアの半径範囲', type: 'number', default: 5, description: '初期スポーン地点からどれだけ離れた範囲にランダムで復活するかをマス単位で設定します（デフォルトは5マス）。' }
];
