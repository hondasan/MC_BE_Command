/* js/search.js */
import { ITEMS, ITEM_CATEGORIES } from './data/items.js';
import { ENTITIES, ENTITY_CATEGORIES } from './data/entities.js';
import { EFFECTS } from './data/effects.js';
import { ENCHANTMENTS } from './data/enchantments.js';
import { showToast } from './components/toast.js';

function init() {
  function copyText(text, successCallback) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => {
          if (successCallback) successCallback();
        })
        .catch(err => {
          fallbackCopyText(text, successCallback);
        });
    } else {
      fallbackCopyText(text, successCallback);
    }
  }

  function fallbackCopyText(text, successCallback) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        if (successCallback) successCallback();
      } else {
        alert('コピーに失敗しました。直接選択してコピーしてください：\n' + text);
      }
    } catch (err) {
      alert('コピーに失敗しました。直接選択してコピーしてください：\n' + text);
    }
    document.body.removeChild(textArea);
  }

  const typeTabs = document.querySelectorAll('#search-type-tabs .preset-tab-btn');
  const searchInput = document.getElementById('id-search-input');
  const subFilterTags = document.getElementById('sub-filter-tags');
  const resultsGrid = document.getElementById('search-results-grid');
  const countInfo = document.getElementById('results-count-info');

  let activeType = 'item'; // item, entity, effect, enchantment
  let activeSubCategory = 'all';
  let query = '';

  // URLパラメータの解析
  const urlParams = new URLSearchParams(window.location.search);
  const initialQuery = urlParams.get('q');
  if (initialQuery) {
    query = decodeURIComponent(initialQuery).toLowerCase().trim();
    searchInput.value = initialQuery;
  }

  // 1. サブカテゴリフィルターの描画
  function renderSubFilters() {
    if (!subFilterTags) return;
    subFilterTags.innerHTML = '';
    activeSubCategory = 'all';

    let categories = [];
    if (activeType === 'item') {
      categories = [{ id: 'all', name: 'すべて', emoji: '🧱' }, ...ITEM_CATEGORIES];
    } else if (activeType === 'entity') {
      categories = [{ id: 'all', name: 'すべて', emoji: '👾' }, ...ENTITY_CATEGORIES];
    }

    if (categories.length === 0) {
      subFilterTags.style.display = 'none';
      return;
    }
    subFilterTags.style.display = 'flex';

    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `filter-tag ${activeSubCategory === cat.id ? 'active' : ''}`;
      btn.textContent = `${cat.emoji} ${cat.name}`;
      btn.setAttribute('data-subcat', cat.id);
      
      btn.addEventListener('click', () => {
        document.querySelectorAll('#sub-filter-tags .filter-tag').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeSubCategory = cat.id;
        performSearch();
      });

      subFilterTags.appendChild(btn);
    });
  }

  // 2. 検索実行
  function performSearch() {
    if (!resultsGrid || !countInfo) return;
    resultsGrid.innerHTML = '';

    let data = [];
    if (activeType === 'item') {
      data = ITEMS;
    } else if (activeType === 'entity') {
      data = ENTITIES;
    } else if (activeType === 'effect') {
      data = EFFECTS;
    } else if (activeType === 'enchantment') {
      data = ENCHANTMENTS;
    }

    // フィルターの適用
    const filtered = data.filter(item => {
      // サブカテゴリフィルタ
      const matchSub = activeSubCategory === 'all' || item.category === activeSubCategory;
      
      // キーワード検索フィルタ
      const nameMatch = item.name.toLowerCase().includes(query);
      const nameEnMatch = item.id.toLowerCase().includes(query) || (item.nameEn && item.nameEn.toLowerCase().includes(query));
      const kanaMatch = item.nameKana && item.nameKana.includes(query);
      const descMatch = item.description && item.description.includes(query);

      return matchSub && (nameMatch || nameEnMatch || kanaMatch || descMatch);
    });

    countInfo.textContent = `見つかった数: ${filtered.length} けん`;

    if (filtered.length === 0) {
      resultsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: var(--space-8);">見つかりませんでした。ちがう言葉でさがしてみてね！</div>`;
      return;
    }

    // カードの生成・描画
    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'id-item';
      card.innerHTML = `
        <div class="id-item-label" style="font-size: var(--text-base);">${item.emoji || '🧱'} ${item.name}</div>
        ${item.description ? `<p style="font-size: var(--text-xs); color: var(--text-muted); margin: 4px 0 8px 0; line-height: 1.3;">${item.description}</p>` : ''}
        <div class="id-item-value-wrapper">
          <span class="id-item-value" style="font-size: var(--text-sm); font-family: var(--font-code);">${item.id}</span>
          <button class="id-item-copy" title="コピーする">
            <i data-lucide="copy" style="width: 14px; height: 14px;"></i>
          </button>
        </div>
      `;

      card.addEventListener('click', () => {
        copyText(item.id, () => {
          showToast(`${item.name}のIDをコピーしたよ！`);
        });
      });

      resultsGrid.appendChild(card);
    });

    if (window.lucide) lucide.createIcons();
  }

  // タブイベント
  typeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      typeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeType = tab.getAttribute('data-type');
      renderSubFilters();
      performSearch();
    });
  });

  // 検索窓イベント
  searchInput.addEventListener('input', (e) => {
    query = e.target.value.toLowerCase().trim();
    performSearch();
  });

  // 初期化起動
  renderSubFilters();
  performSearch();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
