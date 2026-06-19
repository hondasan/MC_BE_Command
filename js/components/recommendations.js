/* js/components/recommendations.js */
import { RECOMMENDATIONS_DATA } from '../data/recommendations.js';

export function renderRecommendations(container) {
  if (!container) return;

  container.innerHTML = `
    <h2 class="section-title" style="margin-top: var(--space-12);">✨ おすすめのマイクラ本＆グッズ</h2>
    <p class="section-intro">もっとマイクラが楽しくなる、おすすめの攻略本やグッズを紹介するよ！</p>
    
    <div class="recommendations-grid">
      ${RECOMMENDATIONS_DATA.map(item => `
        <div class="recommendation-card moshimo-card">
          <div class="recommendation-badge">${item.badge}</div>
          <div id="msmaflink-${item.eid}">リンク</div>
        </div>
      `).join('')}
    </div>

    <!-- 応援枠（サポートエリア） -->
    <div class="support-banner">
      <div class="support-icon">💝</div>
      <div class="support-content">
        <h4 class="support-title">マイクラ コマンドずかん を応援してください！</h4>
        <p class="support-desc">当サイトの紹介リンクからお買い物をしていただくと、紹介料の一部がサイト運営（サーバー代・ドメイン維持費）に役立てられます。ご協力いただけると嬉しいです！</p>
      </div>
    </div>
  `;

  // もしもアフィリエイトの初期化
  initMoshimoAffiliate();

  // Lucideアイコンの初期化（CDN経由で読み込まれている場合）
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function initMoshimoAffiliate() {
  // もしもアフィリエイトのスクリプトローダーを実行
  (function(b,c,f,g,a,d,e){b.MoshimoAffiliateObject=a;
  b[a]=b[a]||function(){arguments.currentScript=c.currentScript
  ||c.scripts[c.scripts.length-2];(b[a].q=b[a].q||[]).push(arguments)};
  c.getElementById(a)||(d=c.createElement(f),d.src=g,
  d.id=a,e=c.getElementsByTagName("body")[0],e.appendChild(d))})
  (window,document,"script","//dn.msmstatic.com/site/cardlink/bundle.js?20220329","msmaflink");

  // 各商品の設定を適用して描画
  RECOMMENDATIONS_DATA.forEach(item => {
    if (item.moshimoConfig) {
      window.msmaflink(item.moshimoConfig);
    }
  });
}
