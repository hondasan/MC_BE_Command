/* js/data/sounds.js */

export const SOUND_CATEGORIES = [
  { id: 'fun', name: 'おもしろ・えんしゅつ', emoji: '🎉' },
  { id: 'mob', name: 'モブのこえ', emoji: '🦁' },
  { id: 'block', name: 'ブロック・かんきょう', emoji: '📦' }
];

export const SOUNDS = [
  // --- おもしろ・演出 (fun) ---
  { id: 'random.levelup', name: 'レベルアップ', nameKana: 'れべるあっぷ', category: 'fun', emoji: '🌟' },
  { id: 'random.explode', name: '爆発音', nameKana: 'ばくはつおん', category: 'fun', emoji: '💣' },
  { id: 'mob.endermen.portal', name: 'テレポートの音', nameKana: 'てれぽーとのおと', category: 'fun', emoji: '🔮' },
  { id: 'ambient.weather.thunder', name: '雷の音', nameKana: 'かみなりのおと', category: 'fun', emoji: '⚡' },
  { id: 'random.orb', name: '経験値オーブの音', nameKana: 'けいけんちのおと', category: 'fun', emoji: '✨' },
  { id: 'random.totem', name: '不死のトーテム発動音', nameKana: 'とーてむのおと', category: 'fun', emoji: '🗿' },
  { id: 'fireworks.blast', name: '花火の破裂音', nameKana: 'はなびのおと', category: 'fun', emoji: '🚀' },
  { id: 'random.anvil_use', name: '金床を使う音', nameKana: 'かなとこのおと', category: 'fun', emoji: '🔨' },
  { id: 'random.bow', name: '弓を射る音', nameKana: 'ゆみをいるおと', category: 'fun', emoji: '🏹' },
  { id: 'random.pop', name: 'アイテム回収音', nameKana: 'ぽっぷのおと', category: 'fun', emoji: '📦' },
  { id: 'random.toast', name: '実績解除 (トースト表示)', nameKana: 'じっせきのおと', category: 'fun', emoji: '🏆' },
  { id: 'random.potion_brew', name: '醸造の音', nameKana: 'じょうぞうのおと', category: 'fun', emoji: '🧪' },
  { id: 'random.burp', name: 'ゲップ (食べ終わった音)', nameKana: 'げっぷのおと', category: 'fun', emoji: '😋' },
  { id: 'ui.cartography_table.draw_map', name: '地図を描く音', nameKana: 'ちずをえがくおと', category: 'fun', emoji: '🗺️' },
  { id: 'ominous_bottle.end', name: '不吉な瓶の音', nameKana: 'ふきつなびんのおと', category: 'fun', emoji: '🍾' },

  // --- モブのこえ (mob) ---
  { id: 'mob.cat.meow', name: 'ネコの鳴き声', nameKana: 'ねこのなきごえ', category: 'mob', emoji: '🐈' },
  { id: 'mob.cat.purr', name: 'ネコがゴロゴロ言う声', nameKana: 'ねこのごろごろ', category: 'mob', emoji: '🐈' },
  { id: 'mob.dog.bark', name: 'オオカミの吠え声', nameKana: 'おおかみのほえごえ', category: 'mob', emoji: '🐺' },
  { id: 'mob.zombie.say', name: 'ゾンビの声', nameKana: 'ぞんびのこえ', category: 'mob', emoji: '🧟' },
  { id: 'mob.creeper.say', name: 'クリーパーのシューという音', nameKana: 'くりーぱーのしゅー', category: 'mob', emoji: '💣' },
  { id: 'mob.ghast.scream', name: 'ガストの叫び声', nameKana: 'がすとのさけびごえ', category: 'mob', emoji: '👻' },
  { id: 'mob.ghast.fireball', name: 'ガストの火の玉発射音', nameKana: 'がすとのひのたま', category: 'mob', emoji: '🔥' },
  { id: 'mob.enderdragon.growl', name: 'エンダードラゴンの唸り声', nameKana: 'えんだーどらごんのこえ', category: 'mob', emoji: '🐉' },
  { id: 'mob.enderdragon.death', name: 'エンダードラゴン討伐音', nameKana: 'えんだーどらごんのさいご', category: 'mob', emoji: '🐉' },
  { id: 'mob.wither.spawn', name: 'ウィザー召喚音', nameKana: 'うぃざーのしょうかん', category: 'mob', emoji: '💀' },
  { id: 'mob.wither.death', name: 'ウィザー討伐音', nameKana: 'うぃざーのさいご', category: 'mob', emoji: '💀' },
  { id: 'mob.warden.heartbeat', name: 'ウォーデンの心臓の鼓動', nameKana: 'うぉーでんのしんぞう', category: 'mob', emoji: '👹' },
  { id: 'mob.warden.sonic_boom', name: 'ウォーデンのソニックブーム', nameKana: 'うぉーでんのそにっくぶーむ', category: 'mob', emoji: '👹' },
  { id: 'mob.villager.idle', name: '村人のフムフム言う声', nameKana: 'むらびとのこえ', category: 'mob', emoji: '🧑' },
  { id: 'mob.villager.no', name: '村人の嫌がる声 (取引拒否)', nameKana: 'むらびとのいやいや', category: 'mob', emoji: '🧑' },
  { id: 'mob.allay.idle', name: 'アレイの声', nameKana: 'あれいのこえ', category: 'mob', emoji: '🧚' },
  { id: 'mob.sniffer.idle', name: 'スニッファーのクンクン言う声', nameKana: 'すにっふぁーのこえ', category: 'mob', emoji: '🦕' },
  { id: 'mob.pig.say', name: 'ブタの鳴き声', nameKana: 'ぶたのなきごえ', category: 'mob', emoji: '🐖' },
  { id: 'mob.cow.say', name: 'ウシの鳴き声', nameKana: 'うしのなきごえ', category: 'mob', emoji: '🐄' },
  { id: 'mob.chicken.say', name: 'ニワトリの鳴き声', nameKana: 'にわとりのなきごえ', category: 'mob', emoji: '🐔' },

  // --- ブロック・環境 (block) ---
  { id: 'dig.glass', name: 'ガラスの割れる音', nameKana: 'がらすのわれるおと', category: 'block', emoji: '🪟' },
  { id: 'random.door_open', name: '木製ドアを開ける音', nameKana: 'どあのあくおと', category: 'block', emoji: '🚪' },
  { id: 'random.door_close', name: '木製ドアを閉める音', nameKana: 'どあのしまるおと', category: 'block', emoji: '🚪' },
  { id: 'random.chestopen', name: 'チェストを開ける音', nameKana: 'ちぇすとのあくおと', category: 'block', emoji: '📦' },
  { id: 'random.chestclosed', name: 'チェストを閉める音', nameKana: 'ちぇすとのしまるおと', category: 'block', emoji: '📦' },
  { id: 'random.click', name: 'クリック音 (ボタンやレバー)', nameKana: 'くりっくおと', category: 'block', emoji: '🔘' },
  { id: 'random.wood_click', name: '木製プレートのクリック音', nameKana: 'きのくりっくおと', category: 'block', emoji: '🔘' },
  { id: 'random.splash', name: '水しぶきの音 (着水)', nameKana: 'みずしぶきのおと', category: 'block', emoji: '🌊' },
  { id: 'random.fizz', name: '火が消える音 (水に溶岩など)', nameKana: 'ひのきえるおと', category: 'block', emoji: '💨' },
  { id: 'block.bell.use', name: 'ベル (鐘) の音', nameKana: 'かねのおと', category: 'block', emoji: '🔔' },
  { id: 'block.lantern.place', name: 'ランタンを置く音', nameKana: 'らんたんをおくおと', category: 'block', emoji: '🏮' },
  { id: 'tile.piston.out', name: 'ピストンが伸びる音', nameKana: 'ぴすんののびるおと', category: 'block', emoji: '⚙️' },
  { id: 'tile.piston.in', name: 'ピストンが戻る音', nameKana: 'ぴすんのちぢむおと', category: 'block', emoji: '⚙️' },
  { id: 'block.sculk_sensor.stepping', name: 'スカルクセンサーの振動感知音', nameKana: 'すかるくのセンサー', category: 'block', emoji: '👾' },
  { id: 'block.sculk_shrieker.shriek', name: 'スカルクシュリーカーの叫び音', nameKana: 'しゅりーかーのさけび', category: 'block', emoji: '👹' },
  { id: 'music.game', name: '通常のBGM', nameKana: 'びーじーえむ', category: 'block', emoji: '🎵' }
];
