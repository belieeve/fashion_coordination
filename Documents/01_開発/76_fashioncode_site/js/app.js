// ========================================
// メインアプリ（ルーティング・初期化）
// ========================================

function navigateTo(page) {
  // ページ切り替え
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');

  // ナビ更新
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });

  // モバイルメニューを閉じる
  document.getElementById('mainNav').classList.remove('open');

  // ボトムナビ更新
  document.querySelectorAll('.bottom-nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.page === page);
  });

  // ページ別初期化
  switch (page) {
    case 'dashboard':
      renderTodayRecommendation();
      renderWardrobeSummary();
      break;
    case 'coordinate':
      renderSeasonFilter();
      renderSceneFilter();
      renderCoordinateList();
      break;
    case 'wardrobe':
      renderWardrobeTabs();
      renderWardrobeGrid();
      break;
    case 'rules':
      renderRules();
      break;
  }

  // スクロールトップ
  window.scrollTo(0, 0);
}

function toggleMenu() {
  document.getElementById('mainNav').classList.toggle('open');
}

// ========================================
// ルールページのレンダリング
// ========================================

function renderRules() {
  // 参考俳優
  const actorGrid = document.getElementById('actorGrid');
  actorGrid.innerHTML = STYLING_RULES.referenceActors.map(actor => `
    <div class="actor-card">
      <div class="actor-name">${actor.name}</div>
      <div class="actor-point">${actor.point}</div>
    </div>
  `).join('');

  // チェックリスト
  const checklist = document.getElementById('checklist');
  checklist.innerHTML = STYLING_RULES.checklist.map((item, i) => `
    <div class="checklist-item">
      <span class="checklist-num">${i + 1}</span>
      <span>${item}</span>
    </div>
  `).join('');

  // ブランド基準
  const brandPolicy = document.getElementById('brandPolicy');
  brandPolicy.innerHTML = `
    <p><span class="rule-key">基準軸：</span>${STYLING_RULES.brandPolicy.axis}</p>
    <p><span class="rule-key">理由：</span>${STYLING_RULES.brandPolicy.reason}</p>
    <p><span class="rule-key">UNIQLO/GU：</span>${STYLING_RULES.brandPolicy.uniqloGu}</p>
  `;

  // 絶対NG（ファッション）
  const fashionNG = document.getElementById('fashionNG');
  fashionNG.innerHTML = STYLING_RULES.absoluteNG.map(item => `<li>${item}</li>`).join('');

  // 絶対NG（身だしなみ）
  const groomingNG = document.getElementById('groomingNG');
  groomingNG.innerHTML = STYLING_RULES.grooming.ng.map(item => `<li>${item}</li>`).join('');

  // アイテム別ルール
  const itemRules = document.getElementById('itemRules');
  const categoryLabels = {
    outer: 'アウター',
    tops: 'トップス',
    pants: 'パンツ',
    shoes: '靴・バッグ',
  };
  itemRules.innerHTML = Object.entries(STYLING_RULES.itemRules).map(([key, rules]) => `
    <div class="item-rule-card">
      <div class="item-rule-title">${categoryLabels[key] || key}</div>
      <ul class="item-rule-list">
        ${rules.map(r => `<li>${r}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

// ========================================
// 初期化
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  // 初期データ読み込み
  getWardrobe();

  // ダッシュボード初期化
  renderTodayRecommendation();
  renderWardrobeSummary();

  // コーデフィルター初期値を現在の季節に設定
  selectedSeason = getCurrentSeason();
});
