/* js/data/enchantments.js */

export const ENCHANTMENTS = [
  // --- 近接武器 (剣・斧など) ---
  { id: 'sharpness', name: 'ダメージ増加 (するどさ)', nameEn: 'Sharpness', maxLevel: 5, target: 'sword', emoji: '⚔️', description: 'すべての敵に与えるダメージが増えます。' },
  { id: 'smite', name: 'アンデッド特効 (アンデッドに強くなる)', nameEn: 'Smite', maxLevel: 5, target: 'sword', emoji: '✝️', description: 'ゾンビやスケルトンなどのアンデッドモブに与えるダメージが増えます。' },
  { id: 'bane_of_arthropods', name: '虫特効 (むしに強くなる)', nameEn: 'Bane of Arthropods', maxLevel: 5, target: 'sword', emoji: '🕷️', description: 'クモやシルバーフィッシュなどの虫モブに与えるダメージが増えます。' },
  { id: 'knockback', name: 'ノックバック (ふっとばす)', nameEn: 'Knockback', maxLevel: 2, target: 'sword', emoji: '💥', description: '攻撃した敵を後ろに大きく吹き飛ばします。' },
  { id: 'fire_aspect', name: '火属性 (ひをつけたまんま)', nameEn: 'Fire Aspect', maxLevel: 2, target: 'sword', emoji: '🔥', description: '攻撃した敵を火だるまにして、持続ダメージを与えます。肉モブを倒すと焼き肉を落とします。' },
  { id: 'looting', name: 'ドロップ増加 (ドロップがふえる)', nameEn: 'Looting', maxLevel: 3, target: 'sword', emoji: '💰', description: 'モブを倒したときに落とすアイテムの量が増え、レアアイテムが出やすくなります。' },

  // --- 弓 (bow) ---
  { id: 'power', name: '射撃ダメージ増加 (射撃力アップ)', nameEn: 'Power', maxLevel: 5, target: 'bow', emoji: '🏹', description: '弓矢の攻撃力が上がります。' },
  { id: 'punch', name: 'パンチ (矢でふっとばす)', nameEn: 'Punch', maxLevel: 2, target: 'bow', emoji: '👊', description: '矢が当たった敵を大きく後ろに吹き飛ばします。' },
  { id: 'flame', name: '火炎 (火の矢)', nameEn: 'Flame', maxLevel: 1, target: 'bow', emoji: '🔥', description: '火の付いた矢を放ちます。当たったモブを燃やし、TNTに着火できます。' },
  { id: 'infinity', name: '無限 (むげんの矢)', nameEn: 'Infinity', maxLevel: 1, target: 'bow', emoji: '♾️', description: '矢がアイテムスロットに1本でもあれば、矢を減らさずに無限に撃てるようになります。' },

  // --- クロスボウ (crossbow) ---
  { id: 'multishot', name: '拡散 (同時に3本発射)', nameEn: 'Multishot', maxLevel: 1, target: 'crossbow', emoji: '🏹', description: '矢や花火を同時に3方向に発射します（消費する矢は1本だけです）。' },
  { id: 'piercing', name: '貫通 (モブをつきぬける)', nameEn: 'Piercing', maxLevel: 4, target: 'crossbow', emoji: '🎯', description: '放った矢が敵を突き抜けて、後ろの敵にも当たるようになります。撃った矢は回収可能です。' },
  { id: 'quick_charge', name: '高速装填 (リロードがはやい)', nameEn: 'Quick Charge', maxLevel: 3, target: 'crossbow', emoji: '⚡', description: 'クロスボウに矢をセットする時間が短くなります。' },

  // --- トライデント (trident) ---
  { id: 'impaling', name: '水生特効 (海のモブに強くなる)', nameEn: 'Impaling', maxLevel: 5, target: 'trident', emoji: '🐟', description: '水の中にいるモブや魚に与えるダメージが増えます。' },
  { id: 'loyalty', name: '忠誠 (もどってくる)', nameEn: 'Loyalty', maxLevel: 3, target: 'trident', emoji: '🔄', description: '投げたトライデントが、自分の手元に自動で戻ってくるようになります。' },
  { id: 'riptide', name: '水流帰還 (水の中をぶっとぶ)', nameEn: 'Riptide', maxLevel: 3, target: 'trident', emoji: '🌊', description: '雨の日や水の中で投げると、自分がトライデントと一緒に飛んで突進します。' },
  { id: 'channeling', name: '召雷 (かみなりをおとす)', nameEn: 'Channeling', maxLevel: 1, target: 'trident', emoji: '⚡', description: '雷雨の日に投げ当てたモブに雷を落とします。クリーパーを帯電させることができます。' },

  // --- 防具共通 (armor) ---
  { id: 'protection', name: 'ダメージ軽減 (ダメージカット)', nameEn: 'Protection', maxLevel: 4, target: 'armor', emoji: '🛡️', description: 'あらゆるダメージ（落下や火なども含む）を減らします。' },
  { id: 'fire_protection', name: '火属性軽減 (熱に強くなる)', nameEn: 'Fire Protection', maxLevel: 4, target: 'armor', emoji: '🔥', description: '火や溶岩から受けるダメージを減らし、火が消えるのを早くします。' },
  { id: 'blast_protection', name: '爆発耐性 (ばくはつに強くなる)', nameEn: 'Blast Protection', maxLevel: 4, target: 'armor', emoji: '💣', description: 'クリーパーやTNTなどの爆発から受けるダメージとノックバックを減らします。' },
  { id: 'projectile_protection', name: '飛び道具耐性 (矢に強くなる)', nameEn: 'Projectile Protection', maxLevel: 4, target: 'armor', emoji: '🏹', description: '矢やガストの火の玉などの遠距離攻撃から受けるダメージを減らします。' },
  { id: 'thorns', name: '棘 (カウンターダメージ)', nameEn: 'Thorns', maxLevel: 3, target: 'armor', emoji: '🌵', description: '攻撃してきた敵に対して、一定の確率でカウンターダメージを与えます。' },

  // --- ヘルメット (helmet) ---
  { id: 'respiration', name: '水中呼吸 (息がながもちする)', nameEn: 'Respiration', maxLevel: 3, target: 'helmet', emoji: '🫧', description: '水の中で呼吸ゲージの減りが遅くなり、水中での視界も良くなります。' },
  { id: 'aqua_affinity', name: '水中採掘 (水中でもはやく掘れる)', nameEn: 'Aqua Affinity', maxLevel: 1, target: 'helmet', emoji: '🏊', description: '水の中にいる時でも、陸上と同じスピードでブロックを掘れるようになります。' },

  // --- ブーツ (boots) ---
  { id: 'feather_falling', name: '落下耐性 (おちてもへいき)', nameEn: 'Feather Falling', maxLevel: 4, target: 'boots', emoji: '🪶', description: '高い場所から落ちたときに受ける落下ダメージを大幅に減らします。' },
  { id: 'depth_strider', name: '水中歩行 (水中をすいすい動く)', nameEn: 'Depth Strider', maxLevel: 3, target: 'boots', emoji: '🏊', description: '水の中を歩くスピードが速くなります。' },
  { id: 'frost_walker', name: '氷渡り (水をこおらせて歩く)', nameEn: 'Frost Walker', maxLevel: 2, target: 'boots', emoji: '🧊', description: '水の上を歩くと、足元の水が一瞬だけ氷に変化し、水上を歩けるようになります。マグマブロックのダメージも無効化します。' },
  { id: 'soul_speed', name: 'ソウルスピード (ソウルサンドで速い)', nameEn: 'Soul Speed', maxLevel: 3, target: 'boots', emoji: '🏃', description: 'ソウルサンドやソウルソイルの上を走るスピードが速くなります。' },

  // --- ツール (ツルハシ・シャベル・斧など) ---
  { id: 'efficiency', name: '効率強化 (はやくほれる)', nameEn: 'Efficiency', maxLevel: 5, target: 'tool', emoji: '⛏️', description: '適正ブロックを壊すスピードが大幅に上がります。' },
  { id: 'silk_touch', name: 'シルクタッチ (そのまま手に入る)', nameEn: 'Silk Touch', maxLevel: 1, target: 'tool', emoji: '🧤', description: 'ガラスや鉱石ブロックなどを、壊さずにそのままブロックの形で回収できるようになります。' },
  { id: 'fortune', name: '幸運 (ドロップがふえる)', nameEn: 'Fortune', maxLevel: 3, target: 'tool', emoji: '🍀', description: '石炭やレッドストーン、ダイヤモンドなどを掘ったときに手に入るアイテムの個数が増えます。' },

  // --- ツール: 釣竿 (fishing_rod) ---
  { id: 'luck_of_the_sea', name: '宝釣り (たからが釣れやすい)', nameEn: 'Luck of the Sea', maxLevel: 3, target: 'fishing_rod', emoji: '💎', description: '釣りでゴミが釣れにくくなり、サドルやエンチャント本などの「お宝」が釣れやすくなります。' },
  { id: 'lure', name: '入れ食い (すぐ魚がかかる)', nameEn: 'Lure', maxLevel: 3, target: 'fishing_rod', emoji: '🐟', description: '魚が浮きに食いつくまでの待ち時間が短くなります。' },

  // --- 全アイテム共通 (all) ---
  { id: 'unbreaking', name: '耐久力 (こわれにくくなる)', nameEn: 'Unbreaking', maxLevel: 3, target: 'all', emoji: '🔧', description: 'アイテムを使用しても耐久値が減りにくくなり、道具や武器が長持ちします。' },
  { id: 'mending', name: '修繕 (経験値でなおる)', nameEn: 'Mending', maxLevel: 1, target: 'all', emoji: '✨', description: '経験値オーブを拾ったときに、手に持っているか装備しているツールの耐久値が自動で回復します。' },
  { id: 'vanishing_curse', name: '消滅の呪い (死ぬときえる呪い)', nameEn: 'Vanishing Curse', maxLevel: 1, target: 'all', emoji: '💀', description: '【呪い】プレイヤーが死んだ時に、このアイテムが地面に落ちずにそのまま消滅してしまいます。' },
  { id: 'binding_curse', name: '束縛の呪い (はずせなくなる呪い)', nameEn: 'Binding Curse', maxLevel: 1, target: 'armor', emoji: '🔒', description: '【呪い】一度装備すると、死ぬかクリエイティブモードにしない限り、自力で外せなくなります。' }
];
