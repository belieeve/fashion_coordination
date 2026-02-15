// ========================================
// コーデ提案ロジック
// ========================================

let selectedSeason = null;
let selectedScene = null;

function getCurrentSeason() {
  const month = new Date().getMonth() + 1;
  for (const [key, s] of Object.entries(SEASONS)) {
    if (s.months.includes(month)) return key;
  }
  return 'spring';
}

function renderSeasonFilter() {
  const container = document.getElementById('seasonFilter');
  const current = getCurrentSeason();

  container.innerHTML = Object.entries(SEASONS).map(([key, s]) => `
    <button class="filter-btn ${selectedSeason === key ? 'active' : ''}"
            onclick="toggleSeasonFilter('${key}')">
      ${s.label}（${s.tempRange}）
      ${key === current ? ' ★' : ''}
    </button>
  `).join('');
}

function renderSceneFilter() {
  const container = document.getElementById('sceneFilter');

  container.innerHTML = Object.entries(SCENES).map(([key, s]) => `
    <button class="filter-btn ${selectedScene === key ? 'active' : ''}"
            onclick="toggleSceneFilter('${key}')">
      ${s.icon} ${s.label}
    </button>
  `).join('');
}

function toggleSeasonFilter(season) {
  selectedSeason = selectedSeason === season ? null : season;
  renderSeasonFilter();
  renderCoordinateList();
}

function toggleSceneFilter(scene) {
  selectedScene = selectedScene === scene ? null : scene;
  renderSceneFilter();
  renderCoordinateList();
}

function getFilteredCoordinates() {
  let coords = [...COORDINATE_PRESETS];

  if (selectedSeason) {
    coords = coords.filter(c => c.season === selectedSeason);
  }

  if (selectedScene) {
    coords = coords.filter(c => c.scene === selectedScene);
  }

  // 松→竹→梅の順にソート
  const levelOrder = { best: 0, good: 1, minimum: 2 };
  coords.sort((a, b) => (levelOrder[a.level] || 0) - (levelOrder[b.level] || 0));

  return coords;
}

function getLevelLabel(level) {
  switch (level) {
    case 'best': return '松';
    case 'good': return '竹';
    case 'minimum': return '梅';
    default: return level;
  }
}

function getItemCategoryLabel(key) {
  const labels = {
    outer: 'アウター',
    tops: 'トップス',
    inner: 'インナー',
    pants: 'パンツ',
    shoes: '靴',
    bag: 'バッグ',
    accessory: '小物',
  };
  return labels[key] || key;
}

function resolveItemName(itemId) {
  const item = getItemById(itemId);
  if (!item) {
    // デフォルトデータから探す
    const defaultItem = DEFAULT_WARDROBE.find(i => i.id === itemId);
    if (defaultItem) {
      return `${defaultItem.brand} ${defaultItem.name}`;
    }
    return '不明なアイテム';
  }
  return `${item.brand} ${item.name}`;
}

function renderCoordinateList() {
  const coords = getFilteredCoordinates();
  const container = document.getElementById('coordinateList');
  const empty = document.getElementById('coordinateEmpty');

  if (coords.length === 0) {
    container.innerHTML = '';
    empty.style.display = 'block';
    return;
  }

  empty.style.display = 'none';

  container.innerHTML = coords.map(coord => {
    const seasonLabel = SEASONS[coord.season]?.label || '';
    const sceneLabel = SCENES[coord.scene]?.label || '';

    const itemsHtml = Object.entries(coord.items).map(([key, itemId]) => `
      <div class="coord-item">
        <span class="coord-item-label">${getItemCategoryLabel(key)}</span>
        <span class="coord-item-name">${resolveItemName(itemId)}</span>
      </div>
    `).join('');

    return `
      <div class="coord-card">
        <div class="coord-header">
          <div>
            <div class="coord-name">${coord.name}</div>
            <div style="font-size:12px;color:var(--color-gray-500);margin-top:4px;">${seasonLabel} / ${sceneLabel}</div>
          </div>
          <span class="coord-level ${coord.level}">${getLevelLabel(coord.level)}</span>
        </div>
        <div class="coord-items">${itemsHtml}</div>
        <div class="coord-reason">${coord.reason}</div>
        <div class="coord-body-tip">体型補正：${coord.bodyTip}</div>
      </div>
    `;
  }).join('');
}

function getTodayRecommendation() {
  const season = getCurrentSeason();
  const bestCoords = COORDINATE_PRESETS.filter(c => c.season === season && c.level === 'best');
  if (bestCoords.length === 0) return null;
  // 日替わりで選ぶ
  const dayIndex = new Date().getDate() % bestCoords.length;
  return bestCoords[dayIndex];
}

function renderTodayRecommendation() {
  const coord = getTodayRecommendation();
  const nameEl = document.getElementById('todayCoordeName');
  const descEl = document.getElementById('todayCoordeDesc');

  if (coord) {
    nameEl.textContent = coord.name;
    descEl.textContent = coord.reason;
  } else {
    nameEl.textContent = 'コーデを選ぼう';
    descEl.textContent = 'COORDINATEページで季節とシーンを選択してください。';
  }
}
