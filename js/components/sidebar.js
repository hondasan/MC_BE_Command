/* js/components/sidebar.js */
import { getBasePath } from './header.js';

export function renderSidebar(container) {
  if (!container) return;

  const basePath = getBasePath();
  const currentPath = window.location.pathname;

  const menuItems = [
    {
      title: '📚 コマンドをしらべる',
      icon: 'book-open',
      items: [
        { name: 'すべての一覧', url: 'commands/index.html' },
        { name: '⚙️ 基本コマンド', url: 'commands/basic.html' },
        { name: '🎁 アイテム (give)', url: 'commands/give.html' },
        { name: '👾 モブしょうかん', url: 'commands/summon.html' },
        { name: '✨ エフェクト (効果)', url: 'commands/effect.html' },
        { name: '🚀 テレポート (移動)', url: 'commands/teleport.html' },
        { name: '🏗️ 建築 (fill/clone)', url: 'commands/fill-clone.html' },
        { name: '🎯 じっこう (execute)', url: 'commands/execute.html' },
        { name: '📊 スコア・表示', url: 'commands/scoreboard.html' },
        { name: '🎮 ゲームルール', url: 'commands/gamerule.html' },
        { name: '💬 メッセージ・音・光', url: 'commands/message.html' },
      ]
    },
    {
      title: '🛠️ べんりなツール',
      icon: 'wrench',
      items: [
        { name: 'コマンド作成ツール', url: 'tools/generator.html' },
        { name: 'ID・えいご名けんさく', url: 'tools/id-list.html' },
      ]
    },
    {
      title: '📖 基本ガイド',
      icon: 'compass',
      items: [
        { name: 'ガイド一覧', url: 'guides/index.html' },
        { name: 'はじめてのコマンド', url: 'guides/getting-started.html' },
        { name: 'コマンドブロックの使い方', url: 'guides/command-block.html' },
        { name: 'ターゲットセレクター', url: 'guides/target-selector.html' },
        { name: 'ざひょう (座標) のしくみ', url: 'guides/coordinates.html' },
      ]
    },
    {
      title: '🍳 コマンドレシピ (作例)',
      icon: 'chef-hat',
      items: [
        { name: 'レシピ一覧', url: 'guides/recipes/index.html' },
        { name: 'さいきょうのそうび', url: 'guides/recipes/strongest-gear.html' },
        { name: 'TNTの雨をふらせる', url: 'guides/recipes/tnt-rain.html' },
        { name: 'バトルアリーナを作る', url: 'guides/recipes/arena.html' },
        { name: 'ミニゲームを作る', url: 'guides/recipes/mini-game.html' },
      ]
    }
  ];

  container.className = 'site-sidebar';
  
  let html = '';
  menuItems.forEach(section => {
    html += `
      <div class="sidebar-section">
        <h3 class="sidebar-title">
          <i data-lucide="${section.icon}" style="width: 16px; height: 16px;"></i>
          ${section.title}
        </h3>
        <ul class="sidebar-menu">
    `;

    section.items.forEach(item => {
      const fullUrl = basePath + item.url;
      // アクティブ判定: URLの末尾が一致するかどうか
      const isActive = currentPath.endsWith(item.url) || 
                      (item.url === 'commands/index.html' && currentPath.endsWith('commands/')) ||
                      (item.url === 'guides/index.html' && currentPath.endsWith('guides/')) ||
                      (item.url === 'guides/recipes/index.html' && currentPath.endsWith('recipes/'));
      
      html += `
        <li class="sidebar-item">
          <a href="${fullUrl}" class="sidebar-link ${isActive ? 'active' : ''}">
            ${item.name}
          </a>
        </li>
      `;
    });

    html += `
        </ul>
      </div>
    `;
  });

  container.innerHTML = html;
}
