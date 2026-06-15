/* js/components/command-card.js */
import { getBasePath } from './header.js';

export function createCommandCard(commandData) {
  const basePath = getBasePath();
  
  // カテゴリバッジのクラス判定
  let badgeClass = 'badge-basic';
  if (commandData.category === 'give') badgeClass = 'badge-give';
  else if (commandData.category === 'summon') badgeClass = 'badge-summon';
  else if (commandData.category === 'effect') badgeClass = 'badge-effect';

  const card = document.createElement('div');
  card.className = 'card animate-on-scroll';
  
  // URL解決
  const detailUrl = `${basePath}commands/${commandData.id}.html`;
  
  card.innerHTML = `
    <div class="card-title">
      <span class="emoji">${commandData.emoji || '⚙️'}</span>
      <span>${commandData.name}</span>
    </div>
    <div style="margin-bottom: var(--space-3);">
      <span class="badge ${badgeClass}">${commandData.categoryLabel || commandData.category}</span>
    </div>
    <div class="card-description">
      ${commandData.description}
    </div>
    <a href="${detailUrl}" class="card-link">くわしく見る</a>
  `;
  
  return card;
}
