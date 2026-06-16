import { renderHeader, getBasePath } from './components/header.js';
import { renderSidebar } from './components/sidebar.js';
import { renderBreadcrumb } from './components/breadcrumb.js';
import { renderFooter } from './components/footer.js';
import { renderRecommendations } from './components/recommendations.js';
import { initCodeBlocks } from './components/code-block.js';

document.addEventListener('DOMContentLoaded', () => {
  const basePath = getBasePath();

  // 1. ヘッダー・サイドバー・パンくず・フッターの挿入
  const headerContainer = document.getElementById('site-header');
  const sidebarContainer = document.getElementById('site-sidebar');
  const breadcrumbContainer = document.getElementById('breadcrumb');
  const mainContent = document.getElementById('main-content');

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

  // おすすめコーナーの挿入
  const recommendationsContainer = document.getElementById('recommendations-container');
  const pageType = document.body.dataset.page;
  const hubPages = ['commands-list', 'guides-index', 'recipes-index'];

  if (recommendationsContainer && pageType === 'home') {
    // トップページ（既存要素に適用）
    renderRecommendations(recommendationsContainer);
  } else if (mainContent && pageType && hubPages.includes(pageType)) {
    // ハブページ（一覧ページ等）に邪魔にならないよう自動挿入
    const container = mainContent.querySelector('.container');
    if (container) {
      const recContainer = document.createElement('section');
      recContainer.id = 'recommendations-container';
      recContainer.className = 'recommendations-light animate-on-scroll';
      container.appendChild(recContainer);
      renderRecommendations(recContainer);
    }
  }

  // フッターを動的に挿入
  if (mainContent) {
    const footerContainer = document.createElement('footer');
    footerContainer.id = 'site-footer';
    document.body.appendChild(footerContainer);
    renderFooter(footerContainer);
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
