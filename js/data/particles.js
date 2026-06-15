/* js/data/particles.js */

export const PARTICLE_CATEGORIES = [
  { id: 'basic', name: 'きほんのパーティクル', emoji: '⭐' },
  { id: 'magic', name: 'まほう・ふしぎ', emoji: '🔮' },
  { id: 'nature', name: 'しぜん・かんきょう', emoji: '🌊' }
];

export const PARTICLES = [
  // --- 基本のパーティクル (basic) ---
  { id: 'minecraft:heart_particle', name: 'ハートマーク', nameKana: 'はーとまーく', category: 'basic', emoji: '❤️', description: 'モブが懐いた時や繁殖する時の赤いハートです。' },
  { id: 'minecraft:villager_happy', name: 'キラキラ (緑色)', nameKana: 'きらきらみどり', category: 'basic', emoji: '💚', description: '村人と取引した時や、骨粉を使った時に出る緑色のキラキラです。' },
  { id: 'minecraft:villager_angry', name: '怒りマーク (暗い煙)', nameKana: 'いかりまーく', category: 'basic', emoji: '💢', description: '村人を攻撃した時などに出る、雷のようなモヤモヤです。' },
  { id: 'minecraft:explosion_particle', name: 'ふつうの爆発', nameKana: 'ばくはつのけむり', category: 'basic', emoji: '💨', description: 'モブを倒した時や、火が消えた時に出る白い煙の煙です。' },
  { id: 'minecraft:huge_explosion_level_block', name: '大爆発 (TNT)', nameKana: 'だいばくはつ', category: 'basic', emoji: '💣', description: 'TNTやクリーパーが爆発したときの大爆発のエフェクトです。' },
  { id: 'minecraft:balloon_gas_particle', name: '風船のガス', nameKana: 'ふうせんのがす', category: 'basic', emoji: '🎈', description: '風船が割れた時に飛び散る白い煙です。' },
  { id: 'minecraft:crit_particle', name: 'クリティカルヒット', nameKana: 'くりてぃかる', category: 'basic', emoji: '⚔️', description: 'ジャンプ攻撃を当てた時や、矢が当たった時に出るオレンジ色のきらめきです。' },
  { id: 'minecraft:crit_magic_particle', name: '魔法クリティカル', nameKana: 'まほうくりてぃかる', category: 'basic', emoji: '✨', description: 'エンチャント武器で攻撃した時に出る青白いキラキラです。' },

  // --- 魔法・不思議 (magic) ---
  { id: 'minecraft:totem_particle', name: '不死のトーテムの輝き', nameKana: 'とーてむのひかり', category: 'magic', emoji: '🗿', description: '不死のトーテムが発動した時の、緑と黄色のゴージャスなキラキラです。' },
  { id: 'minecraft:enchanting_table_particle', name: 'エンチャント文字 (ルーン)', nameKana: 'えんちゃんともじ', category: 'magic', emoji: '📖', description: '本棚からエンチャントテーブルに吸い込まれるような紫色のルーン文字です。' },
  { id: 'minecraft:note_particle', name: '音符 (おんぷ)', nameKana: 'おんぷ', category: 'magic', emoji: '🎵', description: '音ブロックを鳴らした時に出るカラフルな音符マークです。' },
  { id: 'minecraft:portal_reverse_particle', name: 'ポータルの紫モヤ', nameKana: 'ぽーたるのもや', category: 'magic', emoji: '🔮', description: 'ネザーポータルやエンダーマンのまわりに漂う紫色の四角い光です。' },
  { id: 'minecraft:end_rod', name: 'エンドロッドの光', nameKana: 'えんどろっどのひかり', category: 'magic', emoji: '🪄', description: 'エンドロッドから出る、ふんわりと落下する白いキラキラした光です。' },
  { id: 'minecraft:shulker_bullet', name: 'シュルカーの弾の煙', nameKana: 'しゅるかーのだん', category: 'magic', emoji: '🐚', description: 'シュルカーが撃つ弾の後ろから出る白い煙の軌跡です。' },
  { id: 'minecraft:soul_particle', name: 'ソウルの魂', nameKana: 'そうるのたましい', category: 'magic', emoji: '💀', description: 'ソウルサンドで火をつけた時や、ソウルスピードで走る時に出る青い魂です。' },
  { id: 'minecraft:sparkler_particle', name: 'スパーク (火花)', nameKana: 'ひばな', category: 'magic', emoji: '✨', description: '赤や青などの激しくきらめく火花です。' },
  { id: 'minecraft:sonic_explosion', name: 'ソニックブーム (衝撃波)', nameKana: 'そにっくぶーむ', category: 'magic', emoji: '👹', description: 'ウォーデンがソニックブームを撃つ時の同心円状の青い衝撃波です。' },
  { id: 'minecraft:trial_spawner_detection_ominous', name: '試練のスポナー (不吉な予感)', nameKana: 'しれんのすぽなー', category: 'magic', emoji: '🗝️', description: '試練のスポナーが不吉な状態の時に発する青紫のモヤです。' },

  // --- 自然・環境 (nature) ---
  { id: 'minecraft:water_splash_particle', name: '水しぶき', nameKana: 'みずしぶき', category: 'nature', emoji: '🌊', description: '魚が飛び跳ねた時や、水に何か落ちた時の白い水しぶきです。' },
  { id: 'minecraft:water_drip_particle', name: '水滴 (ぽたぽた)', nameKana: 'みずしずく', category: 'nature', emoji: '💧', description: '天井のブロックからポタポタと滴り落ちる青い水滴です。' },
  { id: 'minecraft:lava_particle', name: '溶岩の火花 (パチパチ)', nameKana: 'ようがんのひばな', category: 'nature', emoji: '🔥', description: '溶岩の表面からパチパチと飛び散る赤い火花です。' },
  { id: 'minecraft:lava_drip_particle', name: '溶岩の滴 (ぽたぽた)', nameKana: 'ようがんのしずく', category: 'nature', emoji: '🔥', description: '天井のブロックから熱そうにポタポタ落ちる赤い溶岩の滴です。' },
  { id: 'minecraft:slime_particle', name: 'スライムの飛び散り', nameKana: 'すらいむのはね', category: 'nature', emoji: '🟢', description: 'スライムが跳ねた時に地面に飛び散る緑色の破片です。' },
  { id: 'minecraft:campfire_tall_smoke_particle', name: 'キャンプファイヤーの煙', nameKana: 'たきびのけむり', category: 'nature', emoji: '🪵', description: 'キャンプファイヤーから上空高く立ち上る濃いグレーの煙です。' },
  { id: 'minecraft:snowflake_particle', name: '雪の結晶 (ゆきのけっしょう)', nameKana: 'ゆきのけっしょう', category: 'nature', emoji: '❄️', description: '粉雪ブロックに触れたりした時に舞う、白くて可愛い雪の結晶です。' },
  { id: 'minecraft:spore_blossom_shower_particle', name: '胞子のシャワー', nameKana: 'ほうしのしゃわー', category: 'nature', emoji: '🌸', description: '胞子の花から降ってくる、緑色の幻想的な粒子です。' },
  { id: 'minecraft:cherry_petal_particle', name: '桜の花びら', nameKana: 'さくらの花びら', category: 'nature', emoji: '🌸', description: '桜バイオームや桜の葉ブロックからひらひらと舞い落ちるピンクの花びらです。' },
  { id: 'minecraft:dust_plume_particle', name: '砂埃 (つちぼこり)', nameKana: 'すなぼこり', category: 'nature', emoji: '💨', description: '遺跡の怪しい砂をブラシで掃いた時に舞う茶色い土埃です。' }
];
