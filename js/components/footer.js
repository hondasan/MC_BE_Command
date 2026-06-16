/* js/components/footer.js */
import { getBasePath } from './header.js';

export function renderFooter(container) {
  if (!container) return;

  const basePath = getBasePath();

  container.className = 'site-footer';
  container.innerHTML = `
    <div class="footer-container">
      <div class="footer-sections">
        <!-- サイト情報 -->
        <div class="footer-section footer-info">
          <div class="footer-logo" style="display: flex; align-items: center; gap: var(--space-2); margin-bottom: var(--space-3);">
            <div class="footer-logo-icon" style="width: 28px; height: 28px; background-color: var(--accent-green); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; border: 1.5px solid #fff; box-shadow: var(--shadow-sm);">
              <i data-lucide="box" style="width: 16px; height: 16px; color: #fff;"></i>
            </div>
            <div class="footer-logo-text" style="font-family: var(--font-heading); font-size: var(--text-md); color: var(--text-primary); letter-spacing: 0.05em;">マイクラ <span style="color: var(--accent-green);">コマンドずかん</span></div>
          </div>
          <p class="footer-desc" style="font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.5;">
            Switchやスマホで使えるマイクラ統合版（BE）のコマンドをわかりやすく解説した図鑑サイトです。
          </p>
        </div>

        <!-- リンク・お問い合わせ -->
        <div class="footer-section footer-links">
          <h4 class="footer-title" style="font-family: var(--font-heading); font-size: var(--text-sm); color: var(--accent-gold); margin-bottom: var(--space-3); font-weight: normal; border-bottom: 1px dashed var(--border-default); padding-bottom: var(--space-1);">サイトについて</h4>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: var(--space-2);">
              <a href="${basePath}privacy.html" style="font-size: var(--text-sm); display: flex; align-items: center; gap: var(--space-1); color: var(--text-secondary); transition: color var(--transition-fast);">
                <i data-lucide="shield" style="width: 14px; height: 14px; color: var(--accent-green);"></i> プライバシーポリシー
              </a>
            </li>
          </ul>
        </div>

        <!-- 問い合わせ・Amazonアソシエイト表記 -->
        <div class="footer-section footer-contact">
          <h4 class="footer-title" style="font-family: var(--font-heading); font-size: var(--text-sm); color: var(--accent-gold); margin-bottom: var(--space-3); font-weight: normal; border-bottom: 1px dashed var(--border-default); padding-bottom: var(--space-1);">お問い合わせ</h4>
          <p class="footer-email" style="font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.4; margin-bottom: var(--space-3);">
            <span style="display: flex; align-items: center; gap: var(--space-1); margin-bottom: var(--space-1);">
              <i data-lucide="mail" style="width: 14px; height: 14px; color: var(--accent-green);"></i> 
              <strong style="color: var(--text-primary);">hondasan0925 [at] gmail.com</strong>
            </span>
            <span class="email-note" style="font-size: var(--text-xs); color: var(--text-muted); display: block; padding-left: 18px;">※ [at] を @ に書き換えて送信してください</span>
          </p>
          <div class="footer-amazon-notice" style="font-size: var(--text-xs); color: var(--text-muted); line-height: 1.4; background-color: rgba(0, 0, 0, 0.2); padding: var(--space-2); border-radius: var(--radius-sm); border: 1px solid var(--border-default);">
            <p>当サイトは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。</p>
          </div>
        </div>
      </div>

      <div class="footer-bottom" style="margin-top: var(--space-6); padding-top: var(--space-4); border-top: 1px solid var(--border-default); text-align: center;">
        <p class="copyright" style="font-size: var(--text-xs); color: var(--text-muted);">&copy; 2026 マイクラ コマンドずかん. All Rights Reserved.</p>
      </div>
    </div>
  `;
}
