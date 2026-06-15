/* js/components/breadcrumb.js */
import { getBasePath } from './header.js';

export function renderBreadcrumb(container, breadcrumbData) {
  if (!container || !breadcrumbData || breadcrumbData.length === 0) return;

  const basePath = getBasePath();

  container.className = 'breadcrumb';
  
  let html = '';
  breadcrumbData.forEach((item, index) => {
    const isLast = index === breadcrumbData.length - 1;
    
    html += `<div class="breadcrumb-item">`;
    
    if (isLast) {
      html += `<span>${item.label}</span>`;
    } else {
      // urlが空でない場合はbasePathと結合
      const url = item.url.startsWith('/') ? item.url.replace('/MC_BE_Command/', basePath) : basePath + item.url;
      html += `<a href="${url}" class="breadcrumb-link">${item.label}</a>`;
    }

    if (!isLast) {
      html += `<i data-lucide="chevron-right" style="width: 12px; height: 12px; margin: 0 4px; color: var(--text-muted);"></i>`;
    }

    html += `</div>`;
  });

  container.innerHTML = html;
}
