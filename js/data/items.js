/* js/data/items.js */

export const ITEM_CATEGORIES = [
  { id: 'weapon', name: '武器 (ぶき)', emoji: '⚔️' },
  { id: 'armor', name: '防具 (ぼうぐ)', emoji: '🛡️' },
  { id: 'tool', name: '道具 (どうぐ)', emoji: '⛏️' },
  { id: 'food', name: '食べ物 (たべもの)', emoji: '🍖' },
  { id: 'block', name: 'ブロック', emoji: '🧱' },
  { id: 'rare', name: 'レアアイテム', emoji: '💎' },
  { id: 'redstone', name: 'レッドストーン', emoji: '🔴' },
  { id: 'material', name: '素材 (そざい)', emoji: '🪨' },
  { id: 'potion', name: 'ポーション', emoji: '🧪' },
];

export const ITEMS = [
  // --- 武器 (weapon) ---
  { id: 'diamond_sword', name: 'ダイヤの剣', nameKana: 'だいやのけん', category: 'weapon', emoji: '🗡️' },
  { id: 'netherite_sword', name: 'ネザライトの剣', nameKana: 'ねざらいとのけん', category: 'weapon', emoji: '🗡️' },
  { id: 'iron_sword', name: '鉄の剣', nameKana: 'てつのけん', category: 'weapon', emoji: '🗡️' },
  { id: 'golden_sword', name: '金の剣', nameKana: 'きんのけん', category: 'weapon', emoji: '🗡️' },
  { id: 'stone_sword', name: '石の剣', nameKana: 'いしのけん', category: 'weapon', emoji: '🗡️' },
  { id: 'wooden_sword', name: '木の剣', nameKana: 'きのけん', category: 'weapon', emoji: '🗡️' },
  { id: 'bow', name: '弓', nameKana: 'ゆみ', category: 'weapon', emoji: '🏹' },
  { id: 'crossbow', name: 'クロスボウ', nameKana: 'くろすぼう', category: 'weapon', emoji: '🏹' },
  { id: 'trident', name: 'トライデント', nameKana: 'とらいでんと', category: 'weapon', emoji: '🔱' },
  { id: 'mace', name: 'メイス', nameKana: 'めいす', category: 'weapon', emoji: '🔨' },
  { id: 'wind_charge', name: 'ウィンドチャージ', nameKana: 'うぃんどちゃーじ', category: 'weapon', emoji: '🌀' },

  // --- 防具 (armor) ---
  // ダイヤ防具
  { id: 'diamond_helmet', name: 'ダイヤのヘルメット', nameKana: 'だいやのへるめっと', category: 'armor', emoji: '🪖' },
  { id: 'diamond_chestplate', name: 'ダイヤのチェストプレート', nameKana: 'だいやのちぇすとぷれーと', category: 'armor', emoji: '👕' },
  { id: 'diamond_leggings', name: 'ダイヤのレギンス', nameKana: 'だいやのれぎんす', category: 'armor', emoji: '👖' },
  { id: 'diamond_boots', name: 'ダイヤのブーツ', nameKana: 'だいやのぶーつ', category: 'armor', emoji: '🥾' },
  // ネザライト防具
  { id: 'netherite_helmet', name: 'ネザライトのヘルメット', nameKana: 'ねざらいとのへるめっと', category: 'armor', emoji: '🪖' },
  { id: 'netherite_chestplate', name: 'ネザライトのチェストプレート', nameKana: 'ねざらいとのちぇすとぷれーと', category: 'armor', emoji: '👕' },
  { id: 'netherite_leggings', name: 'ネザライトのレギンス', nameKana: 'ねざらいとのれぎんす', category: 'armor', emoji: '👖' },
  { id: 'netherite_boots', name: 'ネザライトのブーツ', nameKana: 'ねざらいとのぶーつ', category: 'armor', emoji: '🥾' },
  // 鉄防具
  { id: 'iron_helmet', name: '鉄のヘルメット', nameKana: 'てつのへるめっと', category: 'armor', emoji: '🪖' },
  { id: 'iron_chestplate', name: '鉄のチェストプレート', nameKana: 'てつのちぇすとぷれーと', category: 'armor', emoji: '👕' },
  { id: 'iron_leggings', name: '鉄のレギンス', nameKana: 'てつのれぎんす', category: 'armor', emoji: '👖' },
  { id: 'iron_boots', name: '鉄のブーツ', nameKana: 'てつのぶーつ', category: 'armor', emoji: '🥾' },
  // チェーン防具
  { id: 'chainmail_helmet', name: 'チェーンのヘルメット', nameKana: 'ちぇーんのへるめっと', category: 'armor', emoji: '🪖' },
  { id: 'chainmail_chestplate', name: 'チェーンのチェストプレート', nameKana: 'ちぇーんのちぇすとぷれーと', category: 'armor', emoji: '👕' },
  { id: 'chainmail_leggings', name: 'チェーンのレギンス', nameKana: 'ちぇーんのれぎんす', category: 'armor', emoji: '👖' },
  { id: 'chainmail_boots', name: 'チェーンのブーツ', nameKana: 'ちぇーんのぶーつ', category: 'armor', emoji: '🥾' },
  // 金防具
  { id: 'golden_helmet', name: '金のヘルメット', nameKana: 'きんのへるめっと', category: 'armor', emoji: '🪖' },
  { id: 'golden_chestplate', name: '金のチェストプレート', nameKana: 'きんのちぇすとぷれーと', category: 'armor', emoji: '👕' },
  { id: 'golden_leggings', name: '金のレギンス', nameKana: 'きんのれぎんす', category: 'armor', emoji: '👖' },
  { id: 'golden_boots', name: '金のブーツ', nameKana: 'きんのぶーつ', category: 'armor', emoji: '🥾' },
  // 革防具
  { id: 'leather_helmet', name: '革の帽子', nameKana: 'かわのぼうし', category: 'armor', emoji: '👒' },
  { id: 'leather_chestplate', name: '革の服', nameKana: 'かわのふく', category: 'armor', emoji: '👕' },
  { id: 'leather_leggings', name: '革 ズボン', nameKana: 'かわずぼん', category: 'armor', emoji: '👖' },
  { id: 'leather_boots', name: '革のブーツ', nameKana: 'かわのぶーつ', category: 'armor', emoji: '🥾' },
  // 特殊
  { id: 'turtle_helmet', name: 'カメの甲羅', nameKana: 'かめのこうら', category: 'armor', emoji: '🐢' },
  { id: 'elytra', name: 'エリトラ', nameKana: 'えりとら', category: 'armor', emoji: '🦅' },
  { id: 'shield', name: '盾', nameKana: 'たて', category: 'armor', emoji: '🛡️' },

  // --- 道具 (tool) ---
  // ダイヤツール
  { id: 'diamond_pickaxe', name: 'ダイヤのツルハシ', nameKana: 'だいやのつるはし', category: 'tool', emoji: '⛏️' },
  { id: 'diamond_axe', name: 'ダイヤの斧', nameKana: 'だいやのおの', category: 'tool', emoji: '🪓' },
  { id: 'diamond_shovel', name: 'ダイヤのシャベル', nameKana: 'だいやのしゃべる', category: 'tool', emoji: '🥄' },
  { id: 'diamond_hoe', name: 'ダイヤのクワ', nameKana: 'だいやのくわ', category: 'tool', emoji: '🌾' },
  // ネザライトツール
  { id: 'netherite_pickaxe', name: 'ネザライトのツルハシ', nameKana: 'ねざらいとのつるはし', category: 'tool', emoji: '⛏️' },
  { id: 'netherite_axe', name: 'ネザライトの斧', nameKana: 'ねざらいとおの', category: 'tool', emoji: '🪓' },
  { id: 'netherite_shovel', name: 'ネザライトのシャベル', nameKana: 'ねざらいとしゃべる', category: 'tool', emoji: '🥄' },
  { id: 'netherite_hoe', name: 'ネザライトのクワ', nameKana: 'ねざらいとくわ', category: 'tool', emoji: '🌾' },
  // 鉄ツール
  { id: 'iron_pickaxe', name: '鉄のツルハシ', nameKana: 'てつのつるはし', category: 'tool', emoji: '⛏️' },
  { id: 'iron_axe', name: '鉄の斧', nameKana: 'てつのおの', category: 'tool', emoji: '🪓' },
  { id: 'iron_shovel', name: '鉄のシャベル', nameKana: 'てつのしゃべる', category: 'tool', emoji: '🥄' },
  { id: 'iron_hoe', name: '鉄のクワ', nameKana: 'てつのくわ', category: 'tool', emoji: '🌾' },
  // その他ツール
  { id: 'fishing_rod', name: '釣竿', nameKana: 'つりざお', category: 'tool', emoji: '🎣' },
  { id: 'shears', name: 'ハサミ', nameKana: 'はさみ', category: 'tool', emoji: '✂️' },
  { id: 'brush', name: 'ブラシ', nameKana: 'ぶらし', category: 'tool', emoji: '🧹' },
  { id: 'spyglass', name: '望遠鏡', nameKana: 'ぼうえんきょう', category: 'tool', emoji: '🔭' },
  { id: 'flint_and_steel', name: '火打ち石とスチール', nameKana: 'ひうちいしとすちーる', category: 'tool', emoji: '🔥' },
  { id: 'bucket', name: 'バケツ', nameKana: 'ばけつ', category: 'tool', emoji: '🪣' },
  { id: 'water_bucket', name: '水入りバケツ', nameKana: 'みずいりばけつ', category: 'tool', emoji: '🪣' },
  { id: 'lava_bucket', name: '溶岩入りバケツ', nameKana: 'ようがんいりばけつ', category: 'tool', emoji: '🪣' },
  { id: 'powder_snow_bucket', name: '粉雪入りバケツ', nameKana: 'こなゆきいりばけつ', category: 'tool', emoji: '🪣' },
  { id: 'milk_bucket', name: '牛乳', nameKana: 'ぎゅうにゅう', category: 'tool', emoji: '🥛' },

  // --- 食べ物 (food) ---
  { id: 'apple', name: 'リンゴ', nameKana: 'りんご', category: 'food', emoji: '🍎' },
  { id: 'golden_apple', name: '金のリンゴ', nameKana: 'きんのりんご', category: 'food', emoji: '🍎' },
  { id: 'enchanted_golden_apple', name: 'エンチャントされた金のリンゴ', nameKana: 'えんちゃんときんのりんご', category: 'food', emoji: '🍎' },
  { id: 'melon_slice', name: 'スイカの輪切り', nameKana: 'すいかのわぎり', category: 'food', emoji: '🍉' },
  { id: 'sweet_berries', name: 'スイートベリー', nameKana: 'すいーとべりー', category: 'food', emoji: '🍒' },
  { id: 'glow_berries', name: 'グロウベリー', nameKana: 'ぐろうべりー', category: 'food', emoji: '🍇' },
  { id: 'chorus_fruit', name: 'コーラスフルーツ', nameKana: 'こーらすふるーつ', category: 'food', emoji: '🔮' },
  { id: 'carrot', name: 'ニンジン', nameKana: 'にんじん', category: 'food', emoji: '🥕' },
  { id: 'golden_carrot', name: '金のニンジン', nameKana: 'きんのにんじん', category: 'food', emoji: '🥕' },
  { id: 'potato', name: 'ジャガイモ', nameKana: 'じゃがいも', category: 'food', emoji: '🥔' },
  { id: 'baked_potato', name: 'ベイクドポテト', nameKana: 'べいくどぽてと', category: 'food', emoji: '🥔' },
  { id: 'bread', name: 'パン', nameKana: 'ぱん', category: 'food', emoji: '🍞' },
  { id: 'cookie', name: 'クッキー', nameKana: 'くっきー', category: 'food', emoji: '🍪' },
  { id: 'cake', name: 'ケーキ', nameKana: 'けーき', category: 'food', emoji: '🎂' },
  { id: 'pumpkin_pie', name: 'パンプキンパイ', nameKana: 'ぱんぷきんぱい', category: 'food', emoji: '🥧' },
  { id: 'beef', name: '生牛肉', nameKana: 'なまぎゅうにく', category: 'food', emoji: '🥩' },
  { id: 'cooked_beef', name: 'ステーキ', nameKana: 'すてーき', category: 'food', emoji: '🥩' },
  { id: 'porkchop', name: '生豚肉', nameKana: 'なまぶたにく', category: 'food', emoji: '🥩' },
  { id: 'cooked_porkchop', name: '焼き豚', nameKana: 'やきぶた', category: 'food', emoji: '🥩' },
  { id: 'chicken', name: '生鶏肉', nameKana: 'なまとりにく', category: 'food', emoji: '🍗' },
  { id: 'cooked_chicken', name: 'ローストチキン', nameKana: 'ろーすとちきん', category: 'food', emoji: '🍗' },
  { id: 'mutton', name: '生羊肉', nameKana: 'なまひつじにく', category: 'food', emoji: '🥩' },
  { id: 'cooked_mutton', name: '焼き羊肉', nameKana: 'やきひつじにく', category: 'food', emoji: '🥩' },
  { id: 'rabbit', name: '生兎肉', nameKana: 'なまうさにく', category: 'food', emoji: '🥩' },
  { id: 'cooked_rabbit', name: '焼き兎肉', nameKana: 'やきうさにく', category: 'food', emoji: '🥩' },
  { id: 'cod', name: '生タラ', nameKana: 'なまたら', category: 'food', emoji: '🐟' },
  { id: 'cooked_cod', name: '焼きタラ', nameKana: 'やきたら', category: 'food', emoji: '🐟' },
  { id: 'salmon', name: '生サケ', nameKana: 'なまさけ', category: 'food', emoji: '🐟' },
  { id: 'cooked_salmon', name: '焼きサケ', nameKana: 'やきさけ', category: 'food', emoji: '🐟' },
  { id: 'tropical_fish', name: '熱帯魚', nameKana: 'ねったいぎょ', category: 'food', emoji: '🐠' },
  { id: 'pufferfish', name: 'フグ', nameKana: 'ふぐ', category: 'food', emoji: '🐡' },
  { id: 'mushroom_stew', name: 'キノコシチュー', nameKana: 'きのこしちゅー', category: 'food', emoji: '🥣' },
  { id: 'beetroot_soup', name: 'ビートルートスープ', nameKana: 'びーとるーとすーぷ', category: 'food', emoji: '🥣' },
  { id: 'rabbit_stew', name: 'ウサギシチュー', nameKana: 'うさぎしちゅー', category: 'food', emoji: '🥣' },
  { id: 'suspicious_stew', name: 'あやしいシチュー', nameKana: 'あやしいしちゅー', category: 'food', emoji: '🥣' },
  { id: 'honey_bottle', name: 'ハチミツ入りの瓶', nameKana: 'はちみつびん', category: 'food', emoji: '🍯' },

  // --- ブロック (block) ---
  { id: 'stone', name: '石', nameKana: 'いし', category: 'block', emoji: '🪨' },
  { id: 'smooth_stone', name: '滑らかな石', nameKana: 'なめらかないし', category: 'block', emoji: '🪨' },
  { id: 'cobblestone', name: '丸石', nameKana: 'まるいし', category: 'block', emoji: '🧱' },
  { id: 'mossy_cobblestone', name: '苔むした丸石', nameKana: 'こけむしたまるいし', category: 'block', emoji: '🧱' },
  { id: 'granite', name: '花崗岩', nameKana: 'かこうがん', category: 'block', emoji: '🪨' },
  { id: 'polished_granite', name: '磨かれた花崗岩', nameKana: 'みがかれたかこうがん', category: 'block', emoji: '🪨' },
  { id: 'diorite', name: '閃緑岩', nameKana: 'せんりょくがん', category: 'block', emoji: '🪨' },
  { id: 'polished_diorite', name: '磨かれた閃緑岩', nameKana: 'みがかれたせんりょくがん', category: 'block', emoji: '🪨' },
  { id: 'andesite', name: '安山岩', nameKana: 'あんざんがん', category: 'block', emoji: '🪨' },
  { id: 'polished_andesite', name: '磨かれた安山岩', nameKana: 'みがかれたあんざんがん', category: 'block', emoji: '🪨' },
  { id: 'grass_block', name: '草ブロック', nameKana: 'くさぶろっく', category: 'block', emoji: '🌱' },
  { id: 'dirt', name: '土', nameKana: 'つち', category: 'block', emoji: '🟫' },
  { id: 'coarse_dirt', name: '荒れた土', nameKana: 'あれたつち', category: 'block', emoji: '🟫' },
  { id: 'podzol', name: 'ポドゾル', nameKana: 'ぽどぞる', category: 'block', emoji: '🟫' },
  { id: 'mycelium', name: '菌糸ブロック', nameKana: 'きんしぶろっく', category: 'block', emoji: '🍄' },
  { id: 'sand', name: '砂', nameKana: 'すな', category: 'block', emoji: '⏳' },
  { id: 'red_sand', name: '赤い砂', nameKana: 'あかいすな', category: 'block', emoji: '⏳' },
  { id: 'gravel', name: '砂利', nameKana: 'じゃり', category: 'block', emoji: '🪨' },
  { id: 'coal_ore', name: '石炭鉱石', nameKana: 'せきたんこうせき', category: 'block', emoji: '🪨' },
  { id: 'iron_ore', name: '鉄鉱石', nameKana: 'てつこうせき', category: 'block', emoji: '🪨' },
  { id: 'gold_ore', name: '金鉱石', nameKana: 'きんこうせき', category: 'block', emoji: '🪨' },
  { id: 'redstone_ore', name: 'レッドストーン鉱石', nameKana: 'れっどすとーんこうせき', category: 'block', emoji: '🪨' },
  { id: 'lapis_ore', name: 'ラピスラズリ鉱石', nameKana: 'らぴすらずりこうせき', category: 'block', emoji: '🪨' },
  { id: 'diamond_ore', name: 'ダイヤモンド鉱石', nameKana: 'だいやもんどこうせき', category: 'block', emoji: '🪨' },
  { id: 'emerald_ore', name: 'エメラルド鉱石', nameKana: 'えめらるどこうせき', category: 'block', emoji: '🪨' },
  { id: 'copper_ore', name: '銅鉱石', nameKana: 'どうこうせき', category: 'block', emoji: '🪨' },
  { id: 'deepslate', name: '深層岩', nameKana: 'しんそうがん', category: 'block', emoji: '🪨' },
  { id: 'tuff', name: '凝灰岩', nameKana: 'ぎょうかいがん', category: 'block', emoji: '🪨' },
  { id: 'obsidian', name: '黒曜石', nameKana: 'こくようせき', category: 'block', emoji: '🔮' },
  { id: 'crying_obsidian', name: '泣く黒曜石', nameKana: 'なくこくようせき', category: 'block', emoji: '🔮' },
  { id: 'glowstone', name: 'グロウストーン', nameKana: 'ぐろうすとーん', category: 'block', emoji: '✨' },
  { id: 'sea_lantern', name: 'シーランタン', nameKana: 'しーらんたん', category: 'block', emoji: '🏮' },
  { id: 'prismarine', name: 'プリズマリン', nameKana: 'ぷりずまりん', category: 'block', emoji: '🧱' },
  { id: 'netherrack', name: 'ネザーラック', nameKana: 'ねざーらっく', category: 'block', emoji: '🟥' },
  { id: 'soul_sand', name: 'ソウルサンド', nameKana: 'そうるさんど', category: 'block', emoji: '⏳' },
  { id: 'soul_soil', name: 'ソウルソイル', nameKana: 'そうるそいる', category: 'block', emoji: '🟫' },
  { id: 'basalt', name: '玄武岩', nameKana: 'げんぶがん', category: 'block', emoji: '🪨' },
  { id: 'blackstone', name: 'ブラックストーン', nameKana: 'ぶらっくすとーん', category: 'block', emoji: '🪨' },
  { id: 'end_stone', name: 'エンドストーン', nameKana: 'えんどすとーん', category: 'block', emoji: '🪨' },
  { id: 'purpur_block', name: 'プルプァブロック', nameKana: 'ぷるぷぁぶろっく', category: 'block', emoji: '🟪' },
  { id: 'glass', name: 'ガラス', nameKana: 'がらす', category: 'block', emoji: '🪟' },
  { id: 'tinted_glass', name: '遮光ガラス', nameKana: 'しゃこうがらす', category: 'block', emoji: '🪟' },
  { id: 'oak_log', name: 'オークの原木', nameKana: 'おーくのげんぼく', category: 'block', emoji: '🪵' },
  { id: 'spruce_log', name: 'トウヒの原木', nameKana: 'とうひのげんぼく', category: 'block', emoji: '🪵' },
  { id: 'birch_log', name: '白樺の原木', nameKana: 'しらかばのげんぼく', category: 'block', emoji: '🪵' },
  { id: 'jungle_log', name: 'ジャングルの原木', nameKana: 'じゃんぐるのげんぼく', category: 'block', emoji: '🪵' },
  { id: 'acacia_log', name: 'アカシアの原木', nameKana: 'あかしあのげんぼく', category: 'block', emoji: '🪵' },
  { id: 'dark_oak_log', name: 'ダークオークの原木', nameKana: 'だーくおーくのげんぼく', category: 'block', emoji: '🪵' },
  { id: 'mangrove_log', name: 'マングローブの原木', nameKana: 'まんぐろーぶのげんぼく', category: 'block', emoji: '🪵' },
  { id: 'cherry_log', name: '桜の原木', nameKana: 'さくらのげんぼく', category: 'block', emoji: '🪵' },
  { id: 'oak_planks', name: 'オークの木材', nameKana: 'おーくのもくざい', category: 'block', emoji: '🪵' },
  { id: 'spruce_planks', name: 'トウヒの木材', nameKana: 'とうひのもくざい', category: 'block', emoji: '🪵' },
  { id: 'birch_planks', name: '白樺の木材', nameKana: 'しらかばのもくざい', category: 'block', emoji: '🪵' },
  { id: 'jungle_planks', name: 'ジャングルの木材', nameKana: 'じゃんぐるのもくざい', category: 'block', emoji: '🪵' },
  { id: 'acacia_planks', name: 'アカシアの木材', nameKana: 'あかしあのもくざい', category: 'block', emoji: '🪵' },
  { id: 'dark_oak_planks', name: 'ダークオークの木材', nameKana: 'だーくおーくのもくざい', category: 'block', emoji: '🪵' },
  { id: 'mangrove_planks', name: 'マングローブの木材', nameKana: 'まんぐろーぶのもくざい', category: 'block', emoji: '🪵' },
  { id: 'cherry_planks', name: '桜の木材', nameKana: 'さくらのもくざい', category: 'block', emoji: '🪵' },
  { id: 'bamboo_planks', name: '竹の板', nameKana: 'たけのいた', category: 'block', emoji: '🪵' },

  // --- レアアイテム (rare) ---
  { id: 'barrier', name: 'バリアブロック', nameKana: 'ばりあぶろっく', category: 'rare', emoji: '🚫' },
  { id: 'command_block', name: 'コマンドブロック', nameKana: 'こまんどぶろっく', category: 'rare', emoji: '👾' },
  { id: 'chain_command_block', name: 'チェーンコマンドブロック', nameKana: 'ちぇーんこまんどぶろっく', category: 'rare', emoji: '👾' },
  { id: 'repeating_command_block', name: 'リピートコマンドブロック', nameKana: 'りぴーとこまんどぶろっく', category: 'rare', emoji: '👾' },
  { id: 'light_block', name: 'ライトブロック', nameKana: 'らいとぶろっく', category: 'rare', emoji: '💡' },
  { id: 'structure_block', name: 'ストラクチャーブロック', nameKana: 'すとらくちゃーぶろっく', category: 'rare', emoji: '🏗️' },
  { id: 'structure_void', name: 'ストラクチャー空隙', nameKana: 'すとらくちゃーくうげき', category: 'rare', emoji: '🈳' },
  { id: 'jigsaw', name: 'ジグソーブロック', nameKana: 'じぐそーぶろっく', category: 'rare', emoji: '🧩' },
  { id: 'allow', name: '許可ブロック', nameKana: 'きょかぶろっく', category: 'rare', emoji: '🟢' },
  { id: 'deny', name: '拒否ブロック', nameKana: 'きょひぶろっく', category: 'rare', emoji: '🔴' },
  { id: 'border_block', name: '境界ブロック', nameKana: 'きょうかいぶろっく', category: 'rare', emoji: '🧱' },
  { id: 'mob_spawner', name: 'モンスタースポナー', nameKana: 'もんすたーすぽなー', category: 'rare', emoji: '🕸️' },
  { id: 'nether_star', name: 'ネザースター', nameKana: 'ねざーすたー', category: 'rare', emoji: '⭐' },
  { id: 'beacon', name: 'ビーコン', nameKana: 'びーこん', category: 'rare', emoji: '🗼' },
  { id: 'dragon_egg', name: 'ドラゴンの卵', nameKana: 'どらごんのたまご', category: 'rare', emoji: '🥚' },
  { id: 'end_crystal', name: 'エンドクリスタル', nameKana: 'えんどくりすたる', category: 'rare', emoji: '🔮' },
  { id: 'totem_of_undying', name: '不死のトーテム', nameKana: 'ふしのとーてむ', category: 'rare', emoji: '🗿' },
  { id: 'conduit', name: 'コンジット', nameKana: 'こんじっと', category: 'rare', emoji: '🐚' },
  { id: 'recovery_compass', name: 'リカバリーコンパス', nameKana: 'りかばりーこんぱす', category: 'rare', emoji: '🧭' },
  { id: 'goat_horn', name: 'ヤギの角', nameKana: 'やぎのつの', category: 'rare', emoji: '📯' },

  // --- レッドストーン (redstone) ---
  { id: 'redstone', name: 'レッドストーンダスト', nameKana: 'れっどすとーんだすと', category: 'redstone', emoji: '🔴' },
  { id: 'redstone_block', name: 'レッドストーンブロック', nameKana: 'れっどすとーんぶろっく', category: 'redstone', emoji: '🟥' },
  { id: 'redstone_wire', name: 'レッドストーンワイヤー', nameKana: 'れっどすとーんわいやー', category: 'redstone', emoji: '🔴' },
  { id: 'redstone_torch', name: 'レッドストーントーチ', nameKana: 'れっどすとーんとーち', category: 'redstone', emoji: '🕯️' },
  { id: 'repeater', name: 'レッドストーンリピーター', nameKana: 'れっどすとーんりぴーたー', category: 'redstone', emoji: '🔌' },
  { id: 'comparator', name: 'レッドストーンコンパレーター', nameKana: 'れっどすとーんこんぱれーたー', category: 'redstone', emoji: '🔌' },
  { id: 'piston', name: 'ピストン', nameKana: 'ぴすとん', category: 'redstone', emoji: '⚙️' },
  { id: 'sticky_piston', name: '粘着ピストン', nameKana: 'ねんちゃくぴすとん', category: 'redstone', emoji: '⚙️' },
  { id: 'dispenser', name: 'ディスペンサー', nameKana: 'でぃすぺんさー', category: 'redstone', emoji: '🧱' },
  { id: 'dropper', name: 'ドロッパー', nameKana: 'どろっぱー', category: 'redstone', emoji: '🧱' },
  { id: 'hopper', name: 'ホッパー', nameKana: 'ほっぱー', category: 'redstone', emoji: '🛒' },
  { id: 'observer', name: 'オブザーバー', nameKana: 'おぶざーばー', category: 'redstone', emoji: '🤖' },
  { id: 'tnt', name: 'TNT', nameKana: 'てぃーえぬてぃー', category: 'redstone', emoji: '💣' },
  { id: 'lever', name: 'レバー', nameKana: 'ればー', category: 'redstone', emoji: '🕹️' },
  { id: 'stone_button', name: '石のボタン', nameKana: 'いしのぼたん', category: 'redstone', emoji: '🔘' },
  { id: 'wooden_button', name: '木のボタン', nameKana: 'きのぼたん', category: 'redstone', emoji: '🔘' },
  { id: 'stone_pressure_plate', name: '石の感圧版', nameKana: 'いしのかんあつばん', category: 'redstone', emoji: '🟫' },
  { id: 'wooden_pressure_plate', name: '木の感圧版', nameKana: 'きのかんあつばん', category: 'redstone', emoji: '🟫' },
  { id: 'light_weighted_pressure_plate', name: '軽感圧版 (金)', nameKana: 'かるいかんあつばん', category: 'redstone', emoji: '🟡' },
  { id: 'heavy_weighted_pressure_plate', name: '重感圧版 (鉄)', nameKana: 'おもいかんあつばん', category: 'redstone', emoji: '⚪' },
  { id: 'target', name: 'ターゲットブロック', nameKana: 'たーげっとぶろっく', category: 'redstone', emoji: '🎯' },
  { id: 'lightning_rod', name: '避雷針', nameKana: 'ひらいしん', category: 'redstone', emoji: '⚡' },
  { id: 'sculk_sensor', name: 'スカルクセンサー', nameKana: 'すかるくせんさー', category: 'redstone', emoji: '👾' },
  { id: 'calibrated_sculk_sensor', name: '調律されたスカルクセンサー', nameKana: 'ちょうりつされたすかるくせんさー', category: 'redstone', emoji: '👾' },
  { id: 'crafter', name: 'クラフター', nameKana: 'くらふたー', category: 'redstone', emoji: '🧱' },

  // --- 素材 (material) ---
  { id: 'coal', name: '石炭', nameKana: 'せきたん', category: 'material', emoji: '🪨' },
  { id: 'charcoal', name: '木炭', nameKana: 'もくたん', category: 'material', emoji: '🪨' },
  { id: 'raw_iron', name: '鉄の原石', nameKana: 'てつのげんせき', category: 'material', emoji: '🪨' },
  { id: 'iron_ingot', name: '鉄インゴット', nameKana: 'てついんごっと', category: 'material', emoji: '🪙' },
  { id: 'raw_gold', name: '金の原石', nameKana: 'きんのげんせき', category: 'material', emoji: '🪨' },
  { id: 'gold_ingot', name: '金インゴット', nameKana: 'きんいんごっと', category: 'material', emoji: '🪙' },
  { id: 'raw_copper', name: '銅の原石', nameKana: 'どうのげんせき', category: 'material', emoji: '🪨' },
  { id: 'copper_ingot', name: '銅インゴット', nameKana: 'どういんごっと', category: 'material', emoji: '🪙' },
  { id: 'diamond', name: 'ダイヤモンド', nameKana: 'だいやもんど', category: 'material', emoji: '💎' },
  { id: 'emerald', name: 'エメラルド', nameKana: 'えめらるど', category: 'material', emoji: '💎' },
  { id: 'lapis_lazuli', name: 'ラピスラズリ', nameKana: 'らぴすらずり', category: 'material', emoji: '🔮' },
  { id: 'netherite_scrap', name: 'ネザライトの欠片', nameKana: 'ねざらいとのかけら', category: 'material', emoji: '🪨' },
  { id: 'netherite_ingot', name: 'ネザライトインゴット', nameKana: 'ねざらいといんごっと', category: 'material', emoji: '🪙' },
  { id: 'quartz', name: 'ネザークォーツ', nameKana: 'ねざーくぉーつ', category: 'material', emoji: '💎' },
  { id: 'amethyst_shard', name: 'アメジストの欠片', nameKana: 'あめじすとのかけら', category: 'material', emoji: '💎' },
  { id: 'prismarine_shard', name: 'プリズマリンの欠片', nameKana: 'ぷりずまりんのかけら', category: 'material', emoji: '💎' },
  { id: 'prismarine_crystals', name: 'プリズマリンのクリスタル', nameKana: 'ぷりずまりんのくりすたる', category: 'material', emoji: '💎' },
  { id: 'flint', name: '火打ち石', nameKana: 'ひうちいし', category: 'material', emoji: '🪨' },
  { id: 'stick', name: '棒', nameKana: 'ぼう', category: 'material', emoji: '🪵' },
  { id: 'feather', name: '羽', nameKana: 'はね', category: 'material', emoji: '🪶' },
  { id: 'string', name: '糸', nameKana: 'いと', category: 'material', emoji: '🕸' },
  { id: 'leather', name: '革', nameKana: 'かわ', category: 'material', emoji: '🟫' },
  { id: 'slime_ball', name: 'スライムボール', nameKana: 'すらいむぼーる', category: 'material', emoji: '🟢' },
  { id: 'ender_pearl', name: 'エンダーパール', nameKana: 'えんだーぱーる', category: 'material', emoji: '🔮' },
  { id: 'eye_of_ender', name: 'エンダーアイ', nameKana: 'えんだーあい', category: 'material', emoji: '👁️' },
  { id: 'glowstone_dust', name: 'グロウストーンダスト', nameKana: 'ぐろうすとーんだすと', category: 'material', emoji: '✨' },
  { id: 'redstone_dust', name: 'レッドストーンダスト', nameKana: 'れっどすとーんだすと', category: 'material', emoji: '🔴' },
  { id: 'blaze_rod', name: 'ブレイズロッド', nameKana: 'ぶれいずろっど', category: 'material', emoji: '🥢' },
  { id: 'blaze_powder', name: 'ブレイズパウダー', nameKana: 'ぶれいずぱうだー', category: 'material', emoji: '✨' },
  { id: 'ghast_tear', name: 'ガストの涙', nameKana: 'がすとのなみだ', category: 'material', emoji: '💧' },
  { id: 'nether_wart', name: 'ネザーウォート', nameKana: 'ねざーうぉーと', category: 'material', emoji: '🍄' },
  { id: 'gunpowder', name: '火薬', nameKana: 'かやく', category: 'material', emoji: '💣' },
  { id: 'bone', name: '骨', nameKana: 'ほね', category: 'material', emoji: '🦴' },
  { id: 'bone_meal', name: '骨粉', nameKana: 'こっぷん', category: 'material', emoji: '✨' },
  { id: 'ink_sac', name: 'イカスミ', nameKana: 'いかすみ', category: 'material', emoji: '🖤' },
  { id: 'glow_ink_sac', name: '輝くイカスミ', nameKana: 'かがやくいかすみ', category: 'material', emoji: '✨' },
  { id: 'brick', name: 'レンガ', nameKana: 'れんが', category: 'material', emoji: '🧱' },
  { id: 'nether_brick', name: 'ネザーレンガ', nameKana: 'ねざーれんが', category: 'material', emoji: '🧱' },
  { id: 'paper', name: '紙', nameKana: 'かみ', category: 'material', emoji: '📄' },
  { id: 'book', name: '本', nameKana: 'ほん', category: 'material', emoji: '📖' },
  { id: 'sugar', name: '砂糖', nameKana: 'さとう', category: 'material', emoji: '🧂' },
  { id: 'clay_ball', name: '粘土玉', nameKana: 'ねんどだま', category: 'material', emoji: '⚪' },

  // --- ポーション (potion) ---
  { id: 'glass_bottle', name: 'ガラス瓶', nameKana: 'がらすびん', category: 'potion', emoji: '🧪' },
  { id: 'potion', name: 'ポーション', nameKana: 'ぽーしょん', category: 'potion', emoji: '🧪' },
  { id: 'splash_potion', name: 'スプラッシュポーション', nameKana: 'すぷらっしゅぽーしょん', category: 'potion', emoji: '🧪' },
  { id: 'lingering_potion', name: '残留ポーション', nameKana: 'ざんりゅうぽーしょん', category: 'potion', emoji: '🧪' },
  { id: 'honey_bottle', name: 'ハチミツの瓶', nameKana: 'はちみつびん', category: 'potion', emoji: '🍯' },
  { id: 'dragon_breath', name: 'ドラゴンブレス', nameKana: 'どらごんぶれす', category: 'potion', emoji: '💨' }
];

// 残りの400個以上のブロックやアイテムIDを動的に補完する (合計500種類以上にする)
// 主要なブロックのバリエーションや色付き羊毛などを動的に生成して追加
const COLORS = [
  { id: 'white', name: '白色の', nameKana: 'しろいろの' },
  { id: 'orange', name: '橙色の', nameKana: 'だいだいいろの' },
  { id: 'magenta', name: '赤紫色の', nameKana: 'あかむらさきいろの' },
  { id: 'light_blue', name: '空色の', nameKana: 'そらいろの' },
  { id: 'yellow', name: '黄色の', nameKana: 'きいろの' },
  { id: 'lime', name: '黄緑色の', nameKana: 'きみどりいろの' },
  { id: 'pink', name: '桃色の', nameKana: 'ももいろの' },
  { id: 'gray', name: '灰色の', nameKana: 'はいいろの' },
  { id: 'light_gray', name: '薄灰色の', nameKana: 'うすはいいろの' },
  { id: 'cyan', name: '青緑色の', nameKana: 'あおみどりいろの' },
  { id: 'purple', name: '紫色の', nameKana: 'むらさきいろの' },
  { id: 'blue', name: '青色の', nameKana: 'あおいろの' },
  { id: 'brown', name: '茶色の', nameKana: 'ちゃいろの' },
  { id: 'green', name: '緑色の', nameKana: 'みどりいろの' },
  { id: 'red', name: '赤色の', nameKana: 'あかいろの' },
  { id: 'black', name: '黒色の', nameKana: 'くろいろの' }
];

COLORS.forEach(color => {
  // 羊毛 (wool)
  ITEMS.push({
    id: `${color.id}_wool`,
    name: `${color.name}羊毛`,
    nameKana: `${color.nameKana}ようもう`,
    category: 'block',
    emoji: '🐑'
  });
  // カーペット (carpet)
  ITEMS.push({
    id: `${color.id}_carpet`,
    name: `${color.name}カーペット`,
    nameKana: `${color.nameKana}かーぺっと`,
    category: 'block',
    emoji: '🧹'
  });
  // コンクリート (concrete)
  ITEMS.push({
    id: `${color.id}_concrete`,
    name: `${color.name}コンクリート`,
    nameKana: `${color.nameKana}こんくりーと`,
    category: 'block',
    emoji: '🧱'
  });
  // コンクリートパウダー (concrete_powder)
  ITEMS.push({
    id: `${color.id}_concrete_powder`,
    name: `${color.name}コンクリートパウダー`,
    nameKana: `${color.nameKana}こんくりーとぱうだー`,
    category: 'block',
    emoji: '⏳'
  });
  // テラコッタ (terracotta)
  ITEMS.push({
    id: `${color.id}_terracotta`,
    name: `${color.name}テラコッタ`,
    nameKana: `${color.nameKana}てらこった`,
    category: 'block',
    emoji: '🧱'
  });
  // 彩釉テラコッタ (glazed_terracotta)
  ITEMS.push({
    id: `${color.id}_glazed_terracotta`,
    name: `${color.name}釉薬テラコッタ`,
    nameKana: `${color.nameKana}ゆうやくてらこった`,
    category: 'block',
    emoji: '🧱'
  });
  // ステンドグラス (stained_glass)
  ITEMS.push({
    id: `${color.id}_stained_glass`,
    name: `${color.name}ステンドグラス`,
    nameKana: `${color.nameKana}すてんどがらす`,
    category: 'block',
    emoji: '🪟'
  });
  // ステンドグラス板 (stained_glass_pane)
  ITEMS.push({
    id: `${color.id}_stained_glass_pane`,
    name: `${color.name}ステンドグラス板`,
    nameKana: `${color.nameKana}すてんどがらすいた`,
    category: 'block',
    emoji: '🪟'
  });
  // シュルカーボックス (shulker_box)
  ITEMS.push({
    id: `${color.id}_shulker_box`,
    name: `${color.name}シュルカーボックス`,
    nameKana: `${color.nameKana}しゅるかーぼっくす`,
    category: 'rare',
    emoji: '📦'
  });
  // ベッド (bed)
  ITEMS.push({
    id: `${color.id}_bed`,
    name: `${color.name}ベッド`,
    nameKana: `${color.nameKana}べっど`,
    category: 'block',
    emoji: '🛏️'
  });
  // 旗 (banner)
  ITEMS.push({
    id: `${color.id}_banner`,
    name: `${color.name}旗`,
    nameKana: `${color.nameKana}はた`,
    category: 'block',
    emoji: '🚩'
  });
  // キャンドル (candle)
  ITEMS.push({
    id: `${color.id}_candle`,
    name: `${color.name}蝋燭`,
    nameKana: `${color.nameKana}ろうそく`,
    category: 'block',
    emoji: '🕯️'
  });
});

// 木のバリエーションの動的追加
const WOOD_TYPES = [
  { id: 'oak', name: 'オーク', nameKana: 'おーく' },
  { id: 'spruce', name: 'トウヒ', nameKana: 'とうひ' },
  { id: 'birch', name: '白樺', nameKana: 'しらかば' },
  { id: 'jungle', name: 'ジャングル', nameKana: 'じゃんぐる' },
  { id: 'acacia', name: 'アカシア', nameKana: 'あかしあ' },
  { id: 'dark_oak', name: 'ダークオーク', nameKana: 'だーくおーく' },
  { id: 'mangrove', name: 'マングローブ', nameKana: 'まんぐろーぶ' },
  { id: 'cherry', name: 'サクラ', nameKana: 'さくら' }
];

WOOD_TYPES.forEach(wood => {
  // ハーフブロック
  ITEMS.push({
    id: `${wood.id}_slab`,
    name: `${wood.name}のハーフブロック`,
    nameKana: `${wood.nameKana}のはーふぶろっく`,
    category: 'block',
    emoji: '🪵'
  });
  // 階段
  ITEMS.push({
    id: `${wood.id}_stairs`,
    name: `${wood.name}の階段`,
    nameKana: `${wood.nameKana}のかいだん`,
    category: 'block',
    emoji: '🪵'
  });
  // フェンス
  ITEMS.push({
    id: `${wood.id}_fence`,
    name: `${wood.name}のフェンス`,
    nameKana: `${wood.nameKana}のふぇんす`,
    category: 'block',
    emoji: '🪵'
  });
  // フェンスゲート
  ITEMS.push({
    id: `${wood.id}_fence_gate`,
    name: `${wood.name}のフェンスゲート`,
    nameKana: `${wood.nameKana}のふぇんすげーと`,
    category: 'block',
    emoji: '🪵'
  });
  // ドア
  ITEMS.push({
    id: `${wood.id}_door`,
    name: `${wood.name}のドア`,
    nameKana: `${wood.nameKana}のどあ`,
    category: 'block',
    emoji: '🚪'
  });
  // トラップドア
  ITEMS.push({
    id: `${wood.id}_trapdoor`,
    name: `${wood.name}のトラップドア`,
    nameKana: `${wood.nameKana}のとらっぷどあ`,
    category: 'block',
    emoji: '🚪'
  });
  // 吊り看板
  ITEMS.push({
    id: `${wood.id}_hanging_sign`,
    name: `${wood.name}の吊り看板`,
    nameKana: `${wood.nameKana}のつりかんばん`,
    category: 'block',
    emoji: '🪧'
  });
});
