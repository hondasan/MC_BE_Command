/* js/components/code-block.js */
import { showToast } from './toast.js';

// コマンドのシンタックスハイライト関数
export function highlightCommand(cmdText) {
  if (!cmdText) return '';
  
  let html = cmdText;

  // 1. 文字列を一時退避 (HTMLタグの属性値のダブルクォーテーションと干渉するのを防ぐ)
  const strings = [];
  html = html.replace(/(".*?")/g, (match) => {
    const placeholder = `___CMD_STR_${strings.length}___`;
    strings.push({ placeholder, original: match });
    return placeholder;
  });

  // 2. スラッシュのハイライト
  html = html.replace(/^(\/)/, '<span class="cmd-slash">$1</span>');

  // 3. セレクターのハイライト (@s, @p, @a, @e, @r 及び引数 [@a[type=zombie]など])
  html = html.replace(/(@[spaer](\[[^\]]*\])?)/g, '<span class="cmd-selector">$1</span>');

  // 4. 数値のハイライト (単体の整数や小数、~5 や ^-3 など)
  // 座標記号 (~, ^) の直後も含めマッチさせる
  html = html.replace(/(?<=[\s~^])(-?\d+(\.\d+)?)(?=\s|$)/g, '<span class="cmd-number">$1</span>');

  // 5. キーワードのハイライト (true, false)
  html = html.replace(/\b(true|false)\b/g, '<span class="cmd-keyword">$1</span>');

  // 6. 退避した文字列をハイライトして戻す
  strings.forEach(item => {
    const highlighted = `<span class="cmd-string">${item.original}</span>`;
    html = html.replace(item.placeholder, highlighted);
  });

  return html;
}

export function initCodeBlocks() {
  function copyText(text, successCallback, failCallback) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => {
          if (successCallback) successCallback();
        })
        .catch(err => {
          fallbackCopyText(text, successCallback, failCallback);
        });
    } else {
      fallbackCopyText(text, successCallback, failCallback);
    }
  }

  function fallbackCopyText(text, successCallback, failCallback) {
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
        if (failCallback) failCallback();
      }
    } catch (err) {
      if (failCallback) failCallback();
    }
    document.body.removeChild(textArea);
  }

  const blocks = document.querySelectorAll('.mc-code-block');
  
  blocks.forEach(block => {
    const command = block.getAttribute('data-command') || block.textContent.trim();
    const explanation = block.getAttribute('data-explanation') || '';
    
    // 既存のコンテンツをクリアして再構成
    block.textContent = '';
    
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';
    
    // コピーボタン付きのヘッダー
    const header = document.createElement('div');
    header.className = 'code-block-header';
    header.innerHTML = `
      <button class="copy-btn" title="コピーする">
        <i data-lucide="copy" style="width: 14px; height: 14px;"></i>
        <span>コピー</span>
      </button>
    `;
    
    // ハイライトされたコマンド本文
    const content = document.createElement('div');
    content.className = 'code-block-content';
    content.innerHTML = highlightCommand(command);
    
    wrapper.appendChild(header);
    wrapper.appendChild(content);
    
    // 説明文がある場合
    if (explanation) {
      const desc = document.createElement('div');
      desc.className = 'code-block-desc';
      desc.innerHTML = `→ ${explanation}`;
      wrapper.appendChild(desc);
    }
    
    block.appendChild(wrapper);
    
    // コピーイベントの設定
    const copyBtn = header.querySelector('.copy-btn');
    copyBtn.addEventListener('click', () => {
      copyText(command, () => {
        showToast('コピーしたよ！');
        
        // アイコンを一時的にチェックマークに変える
        const icon = copyBtn.querySelector('i');
        const text = copyBtn.querySelector('span');
        
        icon.setAttribute('data-lucide', 'check');
        copyBtn.style.color = 'var(--accent-green)';
        text.textContent = 'コピー完了';
        
        if (window.lucide) lucide.createIcons({ attrs: { class: 'lucide' } });
        
        setTimeout(() => {
          icon.setAttribute('data-lucide', 'copy');
          copyBtn.style.color = '';
          text.textContent = 'コピー';
          if (window.lucide) lucide.createIcons({ attrs: { class: 'lucide' } });
        }, 1500);
      }, (err) => {
        console.error('コピー失敗:', err);
        alert('コピーに失敗しました。直接選択してコピーしてください：\n' + command);
      });
    });
  });
}
