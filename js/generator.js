/* js/generator.js */
import { ITEMS } from './data/items.js';
import { ENTITIES } from './data/entities.js';
import { EFFECTS } from './data/effects.js';
import { GAMERULES } from './data/gamerules.js';
import { highlightCommand } from './components/code-block.js';
import { showToast } from './components/toast.js';

// コマンド生成定義データ
const GENERATOR_DEFS = [
  {
    id: 'gamemode',
    name: '/gamemode',
    label: '⚙️ ゲームモード変更',
    template: '/gamemode {mode} {target}',
    explanation: '指定したターゲットのゲームモードを切り替えます。',
    args: [
      {
        key: 'mode',
        label: 'モード',
        type: 'select',
        options: [
          { label: 'クリエイティブ (空を飛べる・無敵)', value: 'creative' },
          { label: 'サバイバル (体力あり・通常モード)', value: 'survival' },
          { label: 'アドベンチャー (ブロックを壊せない)', value: 'adventure' },
          { label: 'スペクテイター (壁をすり抜ける)', value: 'spectator' }
        ]
      },
      {
        key: 'target',
        label: 'だれを',
        type: 'selector',
        default: '@s'
      }
    ]
  },
  {
    id: 'time',
    name: '/time set',
    label: '☀️ 時間変更',
    template: '/time set {time}',
    explanation: 'ワールドの時間を変更します。',
    args: [
      {
        key: 'time',
        label: '時間',
        type: 'select',
        options: [
          { label: '朝 (day)', value: 'day' },
          { label: 'お昼 (noon)', value: 'noon' },
          { label: '夜 (night)', value: 'night' },
          { label: '真夜中 (midnight)', value: 'midnight' }
        ]
      }
    ]
  },
  {
    id: 'weather',
    name: '/weather',
    label: '🌧️ 天気変更',
    template: '/weather {weather}',
    explanation: 'ワールドの天気を変更します。',
    args: [
      {
        key: 'weather',
        label: '天気',
        type: 'select',
        options: [
          { label: '晴れ (clear)', value: 'clear' },
          { label: '雨 (rain)', value: 'rain' },
          { label: '雷雨 (thunder)', value: 'thunder' }
        ]
      }
    ]
  },
  {
    id: 'give',
    name: '/give',
    label: '🎁 アイテムを出す',
    template: '/give {target} {item} {count}',
    explanation: '指定したターゲットにアイテムを付与します。',
    args: [
      {
        key: 'target',
        label: 'だれに',
        type: 'selector',
        default: '@s'
      },
      {
        key: 'item',
        label: 'アイテムID',
        type: 'item_select' // アイテムデータをバインド
      },
      {
        key: 'count',
        label: 'こすう',
        type: 'number',
        default: 1,
        min: 1,
        max: 64
      }
    ]
  },
  {
    id: 'summon',
    name: '/summon',
    label: '👾 モブを召喚',
    template: '/summon {entity} ~ ~ ~',
    explanation: '自分の足元に指定したモブを召喚します。',
    args: [
      {
        key: 'entity',
        label: 'モブID',
        type: 'entity_select' // エンティティデータをバインド
      }
    ]
  },
  {
    id: 'effect',
    name: '/effect give',
    label: '⚡ エフェクト付与',
    template: '/effect give {target} {effect} {seconds} {level} true',
    explanation: 'ステータス効果（エフェクト）を与えます。モヤモヤ表示は自動でオフになります。',
    args: [
      {
        key: 'target',
        label: 'だれに',
        type: 'selector',
        default: '@s'
      },
      {
        key: 'effect',
        label: 'エフェクトID',
        type: 'effect_select' // エフェクトデータをバインド
      },
      {
        key: 'seconds',
        label: 'じかん (秒数。9999でほぼ無限)',
        type: 'number',
        default: 60,
        min: 1,
        max: 9999
      },
      {
        key: 'level',
        label: '強さ (レベル。255で無敵や大爆走)',
        type: 'number',
        default: 1,
        min: 1,
        max: 255
      }
    ]
  },
  {
    id: 'tp',
    name: '/tp',
    label: '🚀 テレポート',
    template: '/tp {target} {destination}',
    explanation: '指定したターゲットをワープさせます。',
    args: [
      {
        key: 'target',
        label: 'だれを',
        type: 'selector',
        default: '@s'
      },
      {
        key: 'destination',
        label: 'どこへ',
        type: 'select',
        options: [
          { label: '足元のブロック (今の場所)', value: '~ ~ ~' },
          { label: '目の前 5マス', value: '^ ^ ^5' },
          { label: '上空 10マス', value: '~ ~10 ~' },
          { label: 'ワールドの中心 (0, -60, 0)', value: '0 -60 0' }
        ]
      }
    ]
  },
  {
    id: 'gamerule',
    name: '/gamerule',
    label: '🎮 ルール変更',
    template: '/gamerule {rule} {value}',
    explanation: 'ゲームの特殊ルールを設定します。',
    args: [
      {
        key: 'rule',
        label: 'ゲームルール名',
        type: 'rule_select'
      },
      {
        key: 'value',
        label: '設定値',
        type: 'select',
        options: [
          { label: 'オンにします (true)', value: 'true' },
          { label: 'オフにします (false)', value: 'false' }
        ]
      }
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const commandSelectNav = document.getElementById('gen-command-select');
  const fieldsContainer = document.getElementById('gen-fields-container');
  const outputCmd = document.getElementById('gen-output-cmd');
  const outputExplanation = document.getElementById('gen-output-explanation');
  const copyBtn = document.getElementById('gen-copy-btn');
  const favBtn = document.getElementById('gen-fav-btn');

  let activeDef = GENERATOR_DEFS[0]; // 初期アクティブ
  const formData = {};

  // 1. コマンド選択ボタンの描画
  function renderCommandSelect() {
    if (!commandSelectNav) return;
    commandSelectNav.innerHTML = '';
    
    GENERATOR_DEFS.forEach(def => {
      const btn = document.createElement('button');
      btn.className = `filter-tag ${activeDef.id === def.id ? 'active' : ''}`;
      btn.textContent = def.label;
      btn.addEventListener('click', () => {
        document.querySelectorAll('#gen-command-select .filter-tag').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeDef = def;
        renderFields();
      });
      commandSelectNav.appendChild(btn);
    });
  }

  // 2. 引数入力フォームの動的描画
  function renderFields() {
    if (!fieldsContainer) return;
    fieldsContainer.innerHTML = '';
    
    // フォームデータを初期化
    activeDef.args.forEach(arg => {
      formData[arg.key] = arg.default || '';
    });

    activeDef.args.forEach(arg => {
      const group = document.createElement('div');
      group.className = 'form-group';

      const label = document.createElement('label');
      label.className = 'form-label';
      label.textContent = arg.label;
      group.appendChild(label);

      // コントロールの分岐
      if (arg.type === 'select') {
        const select = document.createElement('select');
        select.className = 'form-select';
        arg.options.forEach(opt => {
          const o = document.createElement('option');
          o.value = opt.value;
          o.textContent = opt.label;
          select.appendChild(o);
        });
        select.value = formData[arg.key] || arg.options[0].value;
        formData[arg.key] = select.value;
        select.addEventListener('change', () => {
          formData[arg.key] = select.value;
          updateOutput();
        });
        group.appendChild(select);
      } 
      else if (arg.type === 'selector') {
        const select = document.createElement('select');
        select.className = 'form-select';
        const selectors = [
          { label: '@s (自分)', value: '@s' },
          { label: '@p (一番近くのプレイヤー)', value: '@p' },
          { label: '@a (全員)', value: '@a' },
          { label: '@e (すべての生き物・モブ)', value: '@e' },
          { label: '@r (ランダムなプレイヤー)', value: '@r' }
        ];
        selectors.forEach(opt => {
          const o = document.createElement('option');
          o.value = opt.value;
          o.textContent = opt.label;
          select.appendChild(o);
        });
        select.value = formData[arg.key] || '@s';
        formData[arg.key] = select.value;
        select.addEventListener('change', () => {
          formData[arg.key] = select.value;
          updateOutput();
        });
        group.appendChild(select);
      }
      else if (arg.type === 'number') {
        const input = document.createElement('input');
        input.type = 'number';
        input.className = 'form-input';
        input.min = arg.min || 0;
        input.max = arg.max || 99999;
        input.value = formData[arg.key] || arg.default || 1;
        formData[arg.key] = input.value;
        input.addEventListener('input', () => {
          formData[arg.key] = input.value;
          updateOutput();
        });
        group.appendChild(input);
      }
      else if (arg.type === 'item_select') {
        const select = document.createElement('select');
        select.className = 'form-select';
        // 代表的な15アイテムのみをリストにセット (あまり多すぎると動作が重いため)
        const commonItems = ITEMS.filter(i => !i.id.includes('_')).slice(0, 20);
        commonItems.forEach(item => {
          const o = document.createElement('option');
          o.value = item.id;
          o.textContent = `${item.emoji} ${item.name} (${item.id})`;
          select.appendChild(o);
        });
        select.value = formData[arg.key] || commonItems[0].id;
        formData[arg.key] = select.value;
        select.addEventListener('change', () => {
          formData[arg.key] = select.value;
          updateOutput();
        });
        group.appendChild(select);
      }
      else if (arg.type === 'entity_select') {
        const select = document.createElement('select');
        select.className = 'form-select';
        const commonEntities = ENTITIES.slice(0, 20);
        commonEntities.forEach(ent => {
          const o = document.createElement('option');
          o.value = ent.id;
          o.textContent = `${ent.emoji} ${ent.name} (${ent.id})`;
          select.appendChild(o);
        });
        select.value = formData[arg.key] || commonEntities[0].id;
        formData[arg.key] = select.value;
        select.addEventListener('change', () => {
          formData[arg.key] = select.value;
          updateOutput();
        });
        group.appendChild(select);
      }
      else if (arg.type === 'effect_select') {
        const select = document.createElement('select');
        select.className = 'form-select';
        EFFECTS.forEach(eff => {
          const o = document.createElement('option');
          o.value = eff.id;
          o.textContent = `${eff.emoji} ${eff.name} (${eff.id})`;
          select.appendChild(o);
        });
        select.value = formData[arg.key] || EFFECTS[0].id;
        formData[arg.key] = select.value;
        select.addEventListener('change', () => {
          formData[arg.key] = select.value;
          updateOutput();
        });
        group.appendChild(select);
      }
      else if (arg.type === 'rule_select') {
        const select = document.createElement('select');
        select.className = 'form-select';
        GAMERULES.forEach(rule => {
          const o = document.createElement('option');
          o.value = rule.id;
          o.textContent = `${rule.id} (${rule.name.substring(0, 15)}...)`;
          select.appendChild(o);
        });
        select.value = formData[arg.key] || GAMERULES[0].id;
        formData[arg.key] = select.value;
        select.addEventListener('change', () => {
          formData[arg.key] = select.value;
          updateOutput();
        });
        group.appendChild(select);
      }

      fieldsContainer.appendChild(group);
    });

    updateOutput();
  }

  // 3. コマンド出力の更新
  function updateOutput() {
    if (!outputCmd) return;
    
    let template = activeDef.template;
    Object.keys(formData).forEach(key => {
      template = template.replace(`{${key}}`, formData[key]);
    });

    outputCmd.innerHTML = highlightCommand(template);
    outputCmd.setAttribute('data-raw', template);
    
    if (outputExplanation) {
      outputExplanation.textContent = activeDef.explanation;
    }
  }

  // 4. コピー処理＆履歴保存
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const cmd = outputCmd.getAttribute('data-raw');
      if (!cmd) return;

      navigator.clipboard.writeText(cmd).then(() => {
        showToast('コピーしたよ！');
        addHistory(cmd);
      });
    });
  }

  // 5. お気に入り登録処理
  if (favBtn) {
    favBtn.addEventListener('click', () => {
      const cmd = outputCmd.getAttribute('data-raw');
      if (!cmd) return;
      
      let favs = JSON.parse(localStorage.getItem('mc_cmd_favorites') || '[]');
      if (!favs.includes(cmd)) {
        favs.push(cmd);
        localStorage.setItem('mc_cmd_favorites', JSON.stringify(favs));
        showToast('お気に入りに追加したよ！');
        renderFavorites();
      } else {
        showToast('すでにお気に入りに入っているよ！');
      }
    });
  }

  // 6. お気に入り & 履歴リストの描画
  function renderFavorites() {
    const list = document.getElementById('favorites-list');
    if (!list) return;

    const favs = JSON.parse(localStorage.getItem('mc_cmd_favorites') || '[]');
    if (favs.length === 0) {
      list.innerHTML = `<li style="color: var(--text-muted); font-size: var(--text-xs); padding: var(--space-2) 0;">まだお気に入りはありません。</li>`;
      return;
    }

    list.innerHTML = '';
    favs.forEach((cmd, idx) => {
      const li = document.createElement('li');
      li.className = 'fav-history-item';
      li.innerHTML = `
        <span class="fav-history-cmd" title="${cmd}">${cmd}</span>
        <div class="fav-history-actions">
          <button class="copy-small-btn" title="コピー" style="color: var(--accent-green);"><i data-lucide="copy" style="width: 14px; height: 14px;"></i></button>
          <button class="delete-small-btn" title="さくじょ" style="color: var(--accent-red);"><i data-lucide="trash-2" style="width: 14px; height: 14px;"></i></button>
        </div>
      `;

      // コピーボタン
      li.querySelector('.copy-small-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(cmd).then(() => {
          showToast('コピーしたよ！');
          addHistory(cmd);
        });
      });

      // 削除ボタン
      li.querySelector('.delete-small-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        favs.splice(idx, 1);
        localStorage.setItem('mc_cmd_favorites', JSON.stringify(favs));
        renderFavorites();
        showToast('お気に入りから削除したよ');
      });

      list.appendChild(li);
    });

    if (window.lucide) lucide.createIcons();
  }

  function addHistory(cmd) {
    let hist = JSON.parse(localStorage.getItem('mc_cmd_history') || '[]');
    // 重複を削除して先頭に追加
    hist = hist.filter(h => h !== cmd);
    hist.unshift(cmd);
    // 最大20件
    if (hist.length > 20) hist.pop();
    
    localStorage.setItem('mc_cmd_history', JSON.stringify(hist));
    renderHistory();
  }

  function renderHistory() {
    const list = document.getElementById('history-list');
    if (!list) return;

    const hist = JSON.parse(localStorage.getItem('mc_cmd_history') || '[]');
    if (hist.length === 0) {
      list.innerHTML = `<li style="color: var(--text-muted); font-size: var(--text-xs); padding: var(--space-2) 0;">履歴はありません。</li>`;
      return;
    }

    list.innerHTML = '';
    hist.forEach(cmd => {
      const li = document.createElement('li');
      li.className = 'fav-history-item';
      li.innerHTML = `
        <span class="fav-history-cmd" title="${cmd}">${cmd}</span>
        <div class="fav-history-actions">
          <button class="copy-small-btn" style="color: var(--accent-green);"><i data-lucide="copy" style="width: 14px; height: 14px;"></i></button>
        </div>
      `;

      li.querySelector('.copy-small-btn').addEventListener('click', () => {
        navigator.clipboard.writeText(cmd).then(() => {
          showToast('コピーしたよ！');
        });
      });

      list.appendChild(li);
    });

    if (window.lucide) lucide.createIcons();
  }

  // 初期化起動
  renderCommandSelect();
  renderFields();
  renderFavorites();
  renderHistory();
});
