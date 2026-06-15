/* js/app.js */
import { renderHeader, getBasePath } from './components/header.js';
import { renderSidebar } from './components/sidebar.js';
import { renderBreadcrumb } from './components/breadcrumb.js';
import { initCodeBlocks } from './components/code-block.js';

document.addEventListener('DOMContentLoaded', () => {
  const basePath = getBasePath();

  // 1. ヘッダー・サイドバー・パンくずの挿入
  const headerContainer = document.getElementById('site-header');
  const sidebarContainer = document.getElementById('site-sidebar');
  const breadcrumbContainer = document.getElementById('breadcrumb');

  if (headerContainer) renderHeader(headerContainer);
  if (sidebarContainer) renderSidebar(sidebarContainer);

  if (breadcrumbContainer && document.body.dataset.breadcrumb) {
    try {
      const breadcrumbData = JSON.parse(document.body.dataset.breadcrumb);
      renderBreadcrumb(breadcrumbContainer, breadcrumbData);
    } catch (e) {
      console.error('パンくずデータのパースに失敗しました:', e);
    }
  }

  // 2. Lucideアイコンの初期化 (CDN経由で読み込まれている場合)
  if (window.lucide) {
    lucide.createIcons();
  }

  // 3. コードブロック (シンタックスハイライト・コピー) の初期化
  initCodeBlocks();

  // 4. モバイル用メニュー開閉設定
  initMobileMenu();

  // 5. スクロール連動アニメーションの初期化
  initScrollAnimations();

  // 6. ヘッダー検索窓のイベント設定
  initHeaderSearch(basePath);
});

function initMobileMenu() {
  const toggleBtn = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('site-sidebar');
  
  // オーバーレイ要素を作成または取得
  let overlay = document.getElementById('sidebar-overlay');
  if (!overlay && sidebar) {
    overlay = document.createElement('div');
    overlay.id = 'sidebar-overlay';
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);
  }

  if (toggleBtn && sidebar && overlay) {
    const toggleMenu = () => {
      toggleBtn.classList.toggle('open');
      sidebar.classList.toggle('open');
      overlay.classList.toggle('open');
    };

    toggleBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
  }
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
        // 一度表示されたら監視を外す
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px' // 少し手前で発火
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

function initHeaderSearch(basePath) {
  const searchInput = document.getElementById('header-search-input');
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const query = encodeURIComponent(searchInput.value.trim());
        if (query) {
          // コマンド一覧ページに遷移し、クエリパラメータを渡す
          window.location.href = `${basePath}commands/index.html?q=${query}`;
        }
      }
    });
  }
}
