// ========================================
// ワードローブ管理（CRUD + localStorage）
// ========================================

const STORAGE_KEY = 'mystylebook_wardrobe';

function getWardrobe() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  // 初回：デフォルトデータを保存
  localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_WARDROBE));
  return [...DEFAULT_WARDROBE];
}

function saveWardrobe(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function generateId() {
  return 'item_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
}

function addItem(item) {
  const items = getWardrobe();
  item.id = generateId();
  items.push(item);
  saveWardrobe(items);
  return item;
}

function updateItem(id, updates) {
  const items = getWardrobe();
  const index = items.findIndex(i => i.id === id);
  if (index === -1) return null;
  items[index] = { ...items[index], ...updates };
  saveWardrobe(items);
  return items[index];
}

function deleteItem(id) {
  const items = getWardrobe();
  const filtered = items.filter(i => i.id !== id);
  saveWardrobe(filtered);
  return filtered;
}

function getItemById(id) {
  const items = getWardrobe();
  return items.find(i => i.id === id) || null;
}

function getItemsByCategory(category) {
  const items = getWardrobe();
  if (category === 'all') return items;
  return items.filter(i => i.category === category);
}

function getItemsBySeason(season) {
  const items = getWardrobe();
  return items.filter(i => i.season.includes(season) || i.season.includes('all'));
}

function getCategoryCounts() {
  const items = getWardrobe();
  const counts = {};
  for (const cat of Object.keys(CATEGORIES)) {
    counts[cat] = items.filter(i => i.category === cat).length;
  }
  counts.total = items.length;
  return counts;
}

function resetWardrobe() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_WARDROBE));
}

// ========================================
// ワードローブUI
// ========================================

let currentCategory = 'all';

function renderWardrobeTabs() {
  const container = document.getElementById('categoryTabs');
  const counts = getCategoryCounts();

  let html = `<button class="tab-btn ${currentCategory === 'all' ? 'active' : ''}" onclick="switchCategory('all')">すべて (${counts.total})</button>`;

  for (const [key, cat] of Object.entries(CATEGORIES)) {
    html += `<button class="tab-btn ${currentCategory === key ? 'active' : ''}" onclick="switchCategory('${key}')">${cat.label} (${counts[key]})</button>`;
  }

  container.innerHTML = html;
}

function switchCategory(category) {
  currentCategory = category;
  renderWardrobeTabs();
  renderWardrobeGrid();
}

function renderWardrobeGrid() {
  const items = getItemsByCategory(currentCategory);
  const grid = document.getElementById('wardrobeGrid');
  const empty = document.getElementById('wardrobeEmpty');
  const count = document.getElementById('itemCount');

  count.textContent = `${items.length} items`;

  if (items.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }

  empty.style.display = 'none';

  grid.innerHTML = items.map(item => `
    <div class="wardrobe-card">
      <div class="wardrobe-card-header">
        <span class="wardrobe-card-brand">${item.brand}</span>
        <div class="wardrobe-card-actions">
          <button onclick="openEditModal('${item.id}')" title="編集">編集</button>
          <button class="delete-btn" onclick="confirmDelete('${item.id}')" title="削除">削除</button>
        </div>
      </div>
      <div class="wardrobe-card-name">${item.name}</div>
      <div class="wardrobe-card-meta">
        ${item.color && item.color !== '-' ? `<span>${item.color}</span>` : ''}
        ${item.size && item.size !== '-' ? `<span>${item.size}</span>` : ''}
        <span>${CATEGORIES[item.category]?.label || ''}</span>
      </div>
      ${item.tags && item.tags.length > 0 ? `
        <div class="wardrobe-card-tags">
          ${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      ` : ''}
    </div>
  `).join('');
}

function renderWardrobeSummary() {
  const container = document.getElementById('wardrobeSummary');
  const counts = getCategoryCounts();

  container.innerHTML = Object.entries(CATEGORIES).map(([key, cat]) => `
    <div class="summary-item">
      <span class="summary-count">${counts[key]}</span>
      <span class="summary-label">${cat.label}</span>
    </div>
  `).join('');
}

// ========================================
// モーダル操作
// ========================================

function openAddModal() {
  document.getElementById('modalTitle').textContent = 'アイテム追加';
  document.getElementById('formSubmitBtn').textContent = '追加する';
  document.getElementById('formEditId').value = '';
  document.getElementById('itemForm').reset();
  document.getElementById('itemModal').classList.add('open');
}

function openEditModal(id) {
  const item = getItemById(id);
  if (!item) return;

  document.getElementById('modalTitle').textContent = 'アイテム編集';
  document.getElementById('formSubmitBtn').textContent = '更新する';
  document.getElementById('formEditId').value = id;
  document.getElementById('formCategory').value = item.category;
  document.getElementById('formBrand').value = item.brand;
  document.getElementById('formName').value = item.name;
  document.getElementById('formColor').value = item.color || '';
  document.getElementById('formSize').value = item.size || '';
  document.getElementById('formTags').value = (item.tags || []).join(', ');

  // シーズンチェックボックス
  const checkboxes = document.querySelectorAll('input[name="season"]');
  checkboxes.forEach(cb => {
    cb.checked = (item.season || []).includes(cb.value);
  });

  document.getElementById('itemModal').classList.add('open');
}

function closeModal() {
  document.getElementById('itemModal').classList.remove('open');
}

function handleItemSubmit(e) {
  e.preventDefault();

  const editId = document.getElementById('formEditId').value;
  const seasonCheckboxes = document.querySelectorAll('input[name="season"]:checked');
  const seasons = Array.from(seasonCheckboxes).map(cb => cb.value);
  const tagsStr = document.getElementById('formTags').value;
  const tags = tagsStr ? tagsStr.split(',').map(t => t.trim()).filter(Boolean) : [];

  const itemData = {
    category: document.getElementById('formCategory').value,
    brand: document.getElementById('formBrand').value,
    name: document.getElementById('formName').value,
    color: document.getElementById('formColor').value || '-',
    size: document.getElementById('formSize').value || '-',
    season: seasons.length > 0 ? seasons : ['all'],
    tags: tags,
  };

  if (editId) {
    updateItem(editId, itemData);
  } else {
    addItem(itemData);
  }

  closeModal();
  renderWardrobeTabs();
  renderWardrobeGrid();
  renderWardrobeSummary();
  return false;
}

// 削除確認
let deleteTargetId = null;

function confirmDelete(id) {
  const item = getItemById(id);
  if (!item) return;

  deleteTargetId = id;
  document.getElementById('deleteMessage').textContent =
    `「${item.brand} ${item.name}」を削除しますか？`;
  document.getElementById('deleteModal').classList.add('open');

  document.getElementById('deleteConfirmBtn').onclick = () => {
    deleteItem(deleteTargetId);
    closeDeleteModal();
    renderWardrobeTabs();
    renderWardrobeGrid();
    renderWardrobeSummary();
  };
}

function closeDeleteModal() {
  document.getElementById('deleteModal').classList.remove('open');
  deleteTargetId = null;
}
