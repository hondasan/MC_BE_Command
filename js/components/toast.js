/* js/components/toast.js */

export function showToast(message) {
  // コンテナを探す。なければ作成する
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  // トースト要素の作成
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i data-lucide="check-circle" style="width: 16px; height: 16px;"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  
  // Lucideアイコンの再描画
  if (window.lucide) {
    lucide.createIcons();
  }

  // 1.5秒後にフェードアウトアニメーションを開始
  setTimeout(() => {
    toast.classList.add('fade-out');
    // アニメーション終了（0.3秒）後にDOMから削除
    setTimeout(() => {
      toast.remove();
      // コンテナが空になったらコンテナごと削除
      if (container.children.length === 0) {
        container.remove();
      }
    }, 300);
  }, 1500);
}
