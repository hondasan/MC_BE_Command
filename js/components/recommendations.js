/* js/components/recommendations.js */
import { RECOMMENDATIONS_DATA } from '../data/recommendations.js';
import { getBasePath } from './header.js';

export function renderRecommendations(container) {
  if (!container) return;

  const basePath = getBasePath();

  container.innerHTML = `
    <h2 class="section-title" style="margin-top: var(--space-12);">✨ おすすめのマイクラ本＆グッズ</h2>
    <p class="section-intro">もっとマイクラが楽しくなる、おすすめの攻略本やグッズを紹介するよ！</p>
    
    <div class="recommendations-grid">
      ${RECOMMENDATIONS_DATA.map(item => `
        <div class="recommendation-card">
          <div class="recommendation-badge">${item.badge}</div>
          <div class="recommendation-image-wrapper">
            <img src="${basePath}${item.image}" alt="${item.title}" class="recommendation-image">
          </div>
          <div class="recommendation-info">
            <h3 class="recommendation-title">${item.title}</h3>
            <p class="recommendation-desc">${item.description}</p>
            <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="recommendation-btn">
              <span>Amazonでチェックする</span>
              <i data-lucide="external-link" style="width: 14px; height: 14px;"></i>
            </a>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- 応援枠（サポートエリア） -->
    <div class="support-banner">
      <div class="support-icon">💝</div>
      <div class="support-content">
        <h4 class="support-title">マイクラ コマンドずかん を応援してください！</h4>
        <p class="support-desc">当サイトの紹介リンクからAmazonでお買い物をしていただくと、紹介料の一部がサイト運営（サーバー代・ドメイン維持費）に役立てられます。ご協力いただけると嬉しいです！</p>
      </div>
    </div>

  `;

  // Lucideアイコンの初期化（CDN経由で読み込まれている場合）
  if (window.lucide) {
    window.lucide.createIcons();
  }
}
