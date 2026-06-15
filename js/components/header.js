/* js/components/header.js */

export function getBasePath() {
  const path = window.location.pathname;
  if (path.includes('/MC_BE_Command/')) {
    return '/MC_BE_Command/';
  }
  return '/';
}

export function renderHeader(container) {
  if (!container) return;

  const basePath = getBasePath();

  container.className = 'site-header';
  container.innerHTML = `
    <div class="header-logo">
      <button class="menu-toggle" id="menu-toggle" aria-label="メニューを開く">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <a href="${basePath}" class="header-logo-wrapper" style="display: flex; align-items: center; gap: 8px;">
        <div class="header-logo-icon">
          <i data-lucide="box" style="width: 20px; height: 20px; color: #fff;"></i>
        </div>
        <div class="header-logo-text">マイクラ <span>コマンドずかん</span></div>
      </a>
    </div>

    <div class="header-search">
      <i data-lucide="search" class="header-search-icon"></i>
      <input type="text" class="header-search-input" id="header-search-input" placeholder="コマンドをけんさく...">
    </div>

    <div style="width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;">
      <!-- 右端のスペーサー/将来のツールへのショートカット等 -->
      <a href="${basePath}tools/generator.html" title="コマンド生成ツール" style="color: var(--text-secondary); display: flex; align-items: center;">
        <i data-lucide="wrench" style="width: 20px; height: 20px;"></i>
      </a>
    </div>
  `;
}
