/* js/components/recommendations.js */
import { RECOMMENDATIONS_DATA } from '../data/recommendations.js';

export function renderRecommendations(container) {
  if (!container) return;

  container.innerHTML = `
    <h2 class="section-title" style="margin-top: var(--space-12);">✨ おすすめのマイクラ本＆グッズ</h2>
    <p class="section-intro">もっとマイクラが楽しくなる、おすすめの攻略本やグッズを紹介するよ！</p>
    
    <div class="moshimo-recommendations">
      ${RECOMMENDATIONS_DATA.map(item => `
        <div class="moshimo-item-wrapper">
          <div class="moshimo-badge-label">${item.badge}</div>
          <div id="msmaflink-${item.eid}">リンク</div>
        </div>
      `).join('')}
    </div>

  `;

  // もしもアフィリエイトの初期化
  initMoshimoAffiliate();

  // もしもアフィリエイトのかんたんリンク等を強制的に別タブ（_blank）で開くように設定
  container.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

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
