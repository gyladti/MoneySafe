/* MoneySafe in-phone screens. All sized for a 1170 × 2532 canvas (iPhone 6.5"-equivalent
   logical pixels) — scaled by the parent <Phone>. */

const SB = () => (
  <div className="ms-statusbar">
    <span>12:33</span>
    <div className="right" aria-hidden="true">
      {/* signal */}
      <svg width="36" height="20" viewBox="0 0 36 20"><g fill="currentColor">
        <rect x="0" y="14" width="5" height="6" rx="1"/>
        <rect x="8" y="10" width="5" height="10" rx="1"/>
        <rect x="16" y="6" width="5" height="14" rx="1"/>
        <rect x="24" y="2" width="5" height="18" rx="1"/>
      </g></svg>
      {/* wifi */}
      <svg width="32" height="22" viewBox="0 0 32 22" fill="none"><path d="M16 5c5.5 0 10.5 2.2 14 5.6l-3 3A14 14 0 0 0 16 9.5c-3.7 0-7.1 1.4-9.8 4.1l-3-3C7.5 7.2 12.5 5 16 5Zm0 6c3.8 0 7.3 1.5 9.8 4.1l-3 3a9.5 9.5 0 0 0-13.6 0l-3-3A14 14 0 0 1 16 11Zm0 6c1.9 0 3.6.7 4.9 2L16 22l-4.9-3a7 7 0 0 1 4.9-2Z" fill="currentColor"/></svg>
      {/* battery */}
      <svg width="48" height="22" viewBox="0 0 48 22" fill="none">
        <rect x="0.75" y="0.75" width="42.5" height="20.5" rx="5" stroke="currentColor" strokeWidth="1.5" opacity="0.5" fill="none"/>
        <rect x="3" y="3" width="38" height="16" rx="3" fill="#2eb867"/>
        <path d="M30 8.5 26.5 14h2.5l-0.5 3.5 3.5-5.5h-2.5L30 8.5Z" fill="#fff"/>
        <rect x="44" y="7" width="2.5" height="8" rx="1.2" fill="currentColor" opacity="0.6"/>
      </svg>
    </div>
  </div>
);

const ICONS = {
  food: { bg: '#FFD9D9', emoji: '🍎' },
  taxi: { bg: '#DCE7FF', emoji: '🚕' },
  house: { bg: '#E6DDFF', emoji: '🏠' },
  phone: { bg: '#D6F0FF', emoji: '📱' },
  health: { bg: '#FFD7D9', emoji: '❤️' },
  money: { bg: '#D8F2E1', emoji: '💸' },
  fun: { bg: '#E6DCFF', emoji: '🎬' },
  shop: { bg: '#FFD9E5', emoji: '🛍️' },
  coffee: { bg: '#F1E8DD', emoji: '☕' },
};

function CatIcon({ kind, size = 96, radius = 22 }) {
  const i = ICONS[kind] || ICONS.shop;
  return (
    <div style={{
      width: size, height: size, borderRadius: radius,
      background: i.bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.62,
      lineHeight: 1,
    }}>{i.emoji}</div>
  );
}

/* ========== MAIN DASHBOARD ========== */
function MainScreen({ time = '12:33' }) {
  return (
    <div className="ms-page" style={{ background: 'var(--ms-bg)' }}>
      <SB />
      {/* Top bar with title + actions */}
      <div style={{ position: 'absolute', top: 140, left: 56, right: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ color: 'var(--ms-muted)', fontSize: 38, fontWeight: 600 }}>Итого</div>
        <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
          <div style={{ width: 64, height: 64, borderRadius: 32, background: 'rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32 }}>⚙</div>
          <div style={{ width: 76, height: 76, borderRadius: 38, background: 'var(--ms-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 36 }}>✦</div>
        </div>
      </div>
      {/* Total amount */}
      <div style={{ position: 'absolute', top: 230, left: 56, right: 56, display: 'flex', alignItems: 'baseline', gap: 24 }}>
        <span style={{ fontSize: 160, fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--ms-ink)' }}>8 260</span>
        <span style={{ fontSize: 100, color: 'var(--ms-muted-2)', fontWeight: 600 }}>₽</span>
      </div>
      {/* Filters */}
      <div style={{ position: 'absolute', top: 460, left: 56, display: 'flex', alignItems: 'center', gap: 18 }}>
        <div style={{ background: '#e7e2d6', borderRadius: 30, padding: '14px 28px', fontWeight: 700, fontSize: 32, display: 'flex', alignItems: 'center', gap: 10 }}>этот месяц <span style={{ fontSize: 22, opacity: 0.6 }}>⇅</span></div>
        <div style={{ color: 'var(--ms-muted)', fontSize: 30 }}>в</div>
        <div style={{ background: '#e7e2d6', borderRadius: 30, padding: '14px 28px', fontWeight: 700, fontSize: 32, display: 'flex', alignItems: 'center', gap: 10 }}>👤 Личный <span style={{ fontSize: 22, opacity: 0.6 }}>⇅</span></div>
      </div>

      {/* Categories card */}
      <div style={{ position: 'absolute', top: 590, left: 36, right: 36, background: '#fff', borderRadius: 38, padding: 36, boxShadow: 'var(--ms-shadow-card)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <span style={{ fontWeight: 800, fontSize: 36 }}>Категории</span>
          <span style={{ color: 'var(--ms-muted)', fontSize: 26, fontWeight: 600, letterSpacing: '0.04em' }}>ПО ОБЪЁМУ</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 14, height: 470 }}>
          {/* Transport big card */}
          <div style={{ background: 'var(--ms-brown-deep)', borderRadius: 26, color: '#fff', padding: 26, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CatIcon kind="taxi" size={88} radius={20} />
            <div>
              <div style={{ fontSize: 30, fontWeight: 600, opacity: 0.85 }}>Транспорт</div>
              <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1, letterSpacing: '-0.03em' }}>36%</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ flex: 1, background: 'var(--ms-red)', borderRadius: 22, padding: '0 26px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ fontSize: 36 }}>❤️</span>
                <span style={{ fontSize: 30, fontWeight: 700 }}>Здоровье</span>
              </div>
              <div style={{ fontSize: 38, fontWeight: 800 }}>29%</div>
            </div>
            <div style={{ flex: 1, background: 'var(--ms-coral)', borderRadius: 22, padding: '0 26px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ fontSize: 36 }}>🛍️</span>
                <span style={{ fontSize: 30, fontWeight: 700 }}>Покупки</span>
              </div>
              <div style={{ fontSize: 38, fontWeight: 800 }}>23%</div>
            </div>
            <div style={{ flex: 1, background: 'var(--ms-salmon)', borderRadius: 22, padding: '0 26px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--ms-ink)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ fontSize: 36 }}>🍎</span>
                <span style={{ fontSize: 30, fontWeight: 700 }}>Еда</span>
              </div>
              <div style={{ fontSize: 38, fontWeight: 800 }}>12%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Today header */}
      <div style={{ position: 'absolute', top: 1290, left: 36, right: 36, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ background: '#e7e2d6', borderRadius: 28, padding: '12px 28px', fontWeight: 600, fontSize: 30, color: 'var(--ms-ink-soft)' }}>Сегодня</span>
        <span style={{ background: '#e7e2d6', borderRadius: 28, padding: '12px 28px', fontWeight: 700, fontSize: 30 }}>4 280 ₽</span>
      </div>

      {/* Transactions list */}
      <div style={{ position: 'absolute', top: 1390, left: 36, right: 36, display: 'flex', flexDirection: 'column', gap: 22 }}>
        {[
          ['shop', 'Покупки', 'Озон', '900 ₽'],
          ['health', 'Здоровье', 'Лекарство', '600 ₽'],
          ['health', 'Здоровье', 'Фитнес', '1 800 ₽'],
          ['food', 'Еда', 'Пятёрочка', '980 ₽'],
        ].map(([k, cat, name, amt], i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
            <CatIcon kind={k} size={88} radius={22} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 26, color: 'var(--ms-muted)', fontWeight: 600 }}>{cat}</div>
              <div style={{ fontSize: 38, fontWeight: 800, marginTop: 2 }}>{name}</div>
            </div>
            <div style={{ fontSize: 40, fontWeight: 800 }}>{amt}</div>
          </div>
        ))}
      </div>

      {/* Floating action buttons */}
      <div style={{ position: 'absolute', bottom: 70, left: 36, display: 'flex', gap: 18 }}>
        <div style={{ width: 92, height: 92, borderRadius: 46, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(0,0,0,.06)', fontSize: 40, fontWeight: 400, color: 'var(--ms-ink)' }}>+</div>
        <div style={{ width: 92, height: 92, borderRadius: 46, background: '#e7e2d6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36 }}>🔍</div>
      </div>
      <div style={{ position: 'absolute', bottom: 70, right: 36, width: 116, height: 116, borderRadius: 58, background: 'var(--ms-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 30px rgba(229,57,42,.35)' }}>
        <svg width="46" height="60" viewBox="0 0 46 60" fill="none">
          <rect x="13" y="2" width="20" height="36" rx="10" fill="#fff"/>
          <path d="M5 26v6c0 9.94 8.06 18 18 18s18-8.06 18-18v-6" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
          <line x1="23" y1="50" x2="23" y2="58" stroke="#fff" strokeWidth="3.5" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="ms-bottom-indicator"/>
    </div>
  );
}

/* ========== VOICE LISTENING ========== */
function VoiceScreen() {
  return (
    <div className="ms-page" style={{ background: 'linear-gradient(180deg,#e29080 0%,#d97264 60%,#c75a4e 100%)' }}>
      <div className="ms-statusbar" style={{ color: '#fff' }}>
        <span>12:29</span>
        <div className="right">
          <svg width="36" height="20" viewBox="0 0 36 20"><g fill="currentColor">
            <rect x="0" y="14" width="5" height="6" rx="1"/>
            <rect x="8" y="10" width="5" height="10" rx="1"/>
            <rect x="16" y="6" width="5" height="14" rx="1"/>
            <rect x="24" y="2" width="5" height="18" rx="1"/>
          </g></svg>
          <svg width="32" height="22" viewBox="0 0 32 22"><path d="M16 5c5.5 0 10.5 2.2 14 5.6l-3 3A14 14 0 0 0 16 9.5c-3.7 0-7.1 1.4-9.8 4.1l-3-3C7.5 7.2 12.5 5 16 5Zm0 6c3.8 0 7.3 1.5 9.8 4.1l-3 3a9.5 9.5 0 0 0-13.6 0l-3-3A14 14 0 0 1 16 11Zm0 6c1.9 0 3.6.7 4.9 2L16 22l-4.9-3a7 7 0 0 1 4.9-2Z" fill="currentColor"/></svg>
          <svg width="48" height="22" viewBox="0 0 48 22">
            <rect x="0.75" y="0.75" width="42.5" height="20.5" rx="5" stroke="currentColor" strokeWidth="1.5" opacity="0.6" fill="none"/>
            <rect x="3" y="3" width="38" height="16" rx="3" fill="#fff"/>
            <rect x="44" y="7" width="2.5" height="8" rx="1.2" fill="currentColor" opacity="0.6"/>
          </svg>
        </div>
      </div>

      <div style={{ position: 'absolute', top: 980, left: 0, right: 0, textAlign: 'center', color: '#fff', fontWeight: 700, fontSize: 64, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
        Расскажите<br />о вашем расходе
      </div>

      {/* Waveform */}
      <div style={{ position: 'absolute', top: 1240, left: 0, right: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
        {[18, 32, 50, 26, 70, 90, 70, 50, 110, 70, 50, 26, 18, 12, 12, 8, 8, 6].map((h, i) => (
          <div key={i} style={{ width: 8, height: h, borderRadius: 4, background: '#fff', opacity: 0.95 }}/>
        ))}
      </div>

      <div style={{ position: 'absolute', bottom: 80, left: 56, right: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ width: 124, height: 124, borderRadius: 62, background: 'rgba(255,255,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 50, fontWeight: 300 }}>✕</div>
        <div style={{ width: 124, height: 124, borderRadius: 62, background: 'var(--ms-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 56, fontWeight: 800 }}>✓</div>
      </div>
      <div className="ms-bottom-indicator" style={{ background: '#fff' }}/>
    </div>
  );
}

/* ========== CATEGORIES LIST ========== */
function CategoriesScreen() {
  const cats = [
    ['food', 'Еда'],
    ['taxi', 'Транспорт'],
    ['house', 'Дом'],
    ['phone', 'Связь'],
    ['health', 'Здоровье'],
    ['money', 'Переводы'],
    ['fun', 'Развлечения'],
    ['shop', 'Покупки'],
  ];
  return (
    <div className="ms-page" style={{ background: 'var(--ms-bg)' }}>
      <SB />
      <div style={{ position: 'absolute', top: 150, left: 56, right: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ width: 80, height: 80, borderRadius: 40, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 42, fontWeight: 600 }}>‹</div>
        <div style={{ fontSize: 46, fontWeight: 800 }}>Категории</div>
        <div style={{ width: 80 }}/>
      </div>

      <div style={{ position: 'absolute', top: 290, left: 36, right: 36, background: '#fff', borderRadius: 38, padding: '12px 36px', boxShadow: 'var(--ms-shadow-card)' }}>
        {cats.map(([k, name], i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 26, padding: '28px 0', borderBottom: i < cats.length - 1 ? '1px solid var(--ms-line)' : 'none' }}>
            <CatIcon kind={k} size={92} radius={22}/>
            <div style={{ flex: 1, fontSize: 42, fontWeight: 800 }}>{name}</div>
            <div style={{ background: '#ece6da', borderRadius: 22, padding: '10px 22px', fontSize: 26, color: 'var(--ms-muted)', fontWeight: 600 }}>системная</div>
            <div style={{ fontSize: 32, color: 'var(--ms-muted-2)' }}>›</div>
          </div>
        ))}
      </div>

      <div style={{ position: 'absolute', top: 2090, left: 36, right: 36, display: 'flex', alignItems: 'center', gap: 26 }}>
        <div style={{ width: 92, height: 92, borderRadius: 22, background: '#ece6da', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 50, fontWeight: 300 }}>+</div>
        <div style={{ fontSize: 40, fontWeight: 700 }}>Добавить категорию</div>
      </div>
      <div className="ms-bottom-indicator"/>
    </div>
  );
}

/* ========== NEW EXPENSE / EDIT ========== */
function NewExpenseScreen() {
  return (
    <div className="ms-page" style={{ background: 'var(--ms-bg)' }}>
      <SB />
      <div style={{ position: 'absolute', top: 150, left: 56, right: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 38, color: 'var(--ms-muted)', fontWeight: 600 }}>Отмена</div>
        <div style={{ fontSize: 42, fontWeight: 800 }}>Новая запись</div>
        <div style={{ background: 'var(--ms-ink-soft)', color: '#fff', borderRadius: 28, padding: '14px 32px', fontWeight: 700, fontSize: 32 }}>Записать</div>
      </div>

      <div style={{ position: 'absolute', top: 280, left: 56, right: 56, display: 'flex', gap: 20 }}>
        <div style={{ flex: 1, background: '#e7e2d6', borderRadius: 30, padding: '20px 30px', display: 'flex', alignItems: 'center', gap: 14, fontWeight: 700, fontSize: 34 }}>📅 Сегодня <span style={{ marginLeft: 'auto', opacity: 0.5 }}>⇅</span></div>
        <div style={{ flex: 1, background: '#e7e2d6', borderRadius: 30, padding: '20px 30px', display: 'flex', alignItems: 'center', gap: 14, fontWeight: 700, fontSize: 34 }}>↻ Разово <span style={{ marginLeft: 'auto', opacity: 0.5 }}>⇅</span></div>
      </div>

      <div style={{ position: 'absolute', top: 460, left: 56, right: 56 }}>
        <div style={{ fontSize: 26, color: 'var(--ms-muted)', fontWeight: 700, letterSpacing: '0.06em' }}>СУММА</div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 8 }}>
          <span style={{ fontSize: 140, fontWeight: 900, letterSpacing: '-0.04em' }}>600</span>
          <span style={{ fontSize: 90, color: 'var(--ms-muted-2)' }}>₽</span>
        </div>
        <div style={{ height: 2, background: 'var(--ms-ink)', opacity: 0.85, marginTop: 6 }}/>
      </div>

      <div style={{ position: 'absolute', top: 800, left: 56, right: 56 }}>
        <div style={{ fontSize: 26, color: 'var(--ms-muted)', fontWeight: 700, letterSpacing: '0.06em' }}>ОПИСАНИЕ</div>
        <div style={{ background: '#e7e2d6', borderRadius: 28, padding: '24px 32px', marginTop: 14, fontWeight: 700, fontSize: 38 }}>Озон</div>
      </div>

      <div style={{ position: 'absolute', top: 1020, left: 56, right: 56 }}>
        <div style={{ fontSize: 26, color: 'var(--ms-muted)', fontWeight: 700, letterSpacing: '0.06em' }}>КАТЕГОРИЯ</div>
        <div style={{ display: 'flex', gap: 16, marginTop: 18, flexWrap: 'wrap' }}>
          <div style={{ background: '#e7e2d6', borderRadius: 30, padding: '16px 28px', fontWeight: 700, fontSize: 32, display: 'flex', gap: 12, alignItems: 'center' }}>💸 Переводы</div>
          <div style={{ background: '#e7e2d6', borderRadius: 30, padding: '16px 28px', fontWeight: 700, fontSize: 32, display: 'flex', gap: 12, alignItems: 'center' }}>🎬 Развлечения</div>
          <div style={{ background: 'var(--ms-ink-soft)', color: '#fff', borderRadius: 30, padding: '16px 28px', fontWeight: 700, fontSize: 32, display: 'flex', gap: 12, alignItems: 'center' }}>🛍️ Покупки</div>
        </div>
      </div>

      <div style={{ position: 'absolute', top: 1260, left: 56, right: 56 }}>
        <div style={{ fontSize: 26, color: 'var(--ms-muted)', fontWeight: 700, letterSpacing: '0.06em' }}>ТЕГИ</div>
        <div style={{ display: 'flex', gap: 14, marginTop: 18 }}>
          <div style={{ background: '#fff', borderRadius: 30, padding: '14px 22px', fontWeight: 700, fontSize: 30, display: 'flex', alignItems: 'center', gap: 14 }}>
            #одежда <span style={{ width: 32, height: 32, borderRadius: 16, background: 'var(--ms-muted-2)', color: '#fff', fontSize: 22, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>✕</span>
          </div>
          <div style={{ background: '#e7e2d6', borderRadius: 30, padding: '14px 22px', fontWeight: 600, fontSize: 30, color: 'var(--ms-muted)', display: 'flex', alignItems: 'center', gap: 14 }}>
            тег <span style={{ opacity: 0.5 }}>✓ ✕</span>
          </div>
        </div>
      </div>
      <div className="ms-bottom-indicator"/>
    </div>
  );
}

/* ========== ANALYTICS (matches onboarding screen 4) ========== */
function AnalyticsScreen() {
  return (
    <div className="ms-page" style={{ background: 'var(--ms-bg)' }}>
      <SB />
      <div style={{ position: 'absolute', top: 220, left: 56, right: 56 }}>
        <div style={{ fontSize: 26, color: 'var(--ms-muted)', fontWeight: 700, letterSpacing: '0.1em' }}>МАЙ · ПОТРАЧЕНО</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, marginTop: 16 }}>
          <span style={{ fontSize: 220, fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1 }}>38<span style={{ color: 'var(--ms-muted-2)' }}>134</span></span>
          <span style={{ fontSize: 90, color: 'var(--ms-muted-2)' }}>₽</span>
        </div>
      </div>

      {/* Stacked bar */}
      <div style={{ position: 'absolute', top: 660, left: 56, right: 56, display: 'flex', gap: 14 }}>
        <div style={{ flex: 32, background: 'var(--ms-red)', borderRadius: 22, padding: '20px 0', textAlign: 'center', color: '#fff', fontWeight: 800, fontSize: 36 }}>32%</div>
        <div style={{ flex: 24, background: 'var(--ms-brown-deep)', borderRadius: 22, padding: '20px 0', textAlign: 'center', color: '#fff', fontWeight: 800, fontSize: 36 }}>24%</div>
        <div style={{ flex: 18, background: 'var(--ms-coral)', borderRadius: 22, padding: '20px 0', textAlign: 'center', color: '#fff', fontWeight: 800, fontSize: 36 }}>18%</div>
        <div style={{ flex: 14, background: 'var(--ms-salmon)', borderRadius: 22 }}/>
        <div style={{ flex: 12, background: 'var(--ms-peach)', borderRadius: 22 }}/>
      </div>

      {/* Legend rows */}
      <div style={{ position: 'absolute', top: 840, left: 56, right: 56, display: 'flex', flexDirection: 'column', gap: 40 }}>
        {[
          ['var(--ms-red)', 'Еда', '32%'],
          ['var(--ms-brown-deep)', 'Транспорт', '24%'],
          ['var(--ms-coral)', 'Покупки', '18%'],
          ['var(--ms-salmon)', 'Развлечения', '14%'],
          ['var(--ms-peach)', 'Здоровье', '12%'],
        ].map(([c, name, p], i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <div style={{ width: 80, height: 80, borderRadius: 22, background: c }}/>
            <div style={{ flex: 1, fontSize: 44, fontWeight: 800 }}>{name}</div>
            <div style={{ fontSize: 44, fontWeight: 800 }}>{p}</div>
          </div>
        ))}
      </div>

      <div className="ms-bottom-indicator"/>
    </div>
  );
}

Object.assign(window, { MainScreen, VoiceScreen, VoiceParsedScreen, CategoriesScreen, NewExpenseScreen, AnalyticsScreen, CatIcon, SB });

/* ========== VOICE PARSED (matches onboarding3 — voice→category cards) ========== */
function VoiceParsedScreen({ headline = null }) {
  const rows = [
    { tag: 'голос', phrase: '«такси 700»', cat: 'Транспорт', sub: null, kind: 'taxi', amt: '700 ₽' },
    { tag: 'голос', phrase: '«кофе 300 вчера»', cat: 'Еда', sub: 'вчера', kind: 'coffee', amt: '300 ₽' },
    { tag: 'голос', phrase: '«Фитнес 15 000»', cat: 'Здоровье', sub: null, kind: 'health', amt: '15 000 ₽' },
  ];
  return (
    <div className="ms-page" style={{ background: 'var(--ms-bg)' }}>
      <SB />
      {/* Headline */}
      <div style={{ position: 'absolute', top: 240, left: 64, right: 64 }}>
        <div style={{ fontSize: 124, fontWeight: 900, lineHeight: 0.98, letterSpacing: '-0.04em' }}>
          Говоришь —<br/><span style={{ color: 'var(--ms-red)' }}>я понимаю.</span>
        </div>
      </div>

      {/* Cards */}
      <div style={{ position: 'absolute', top: 700, left: 48, right: 48, display: 'flex', flexDirection: 'column', gap: 44 }}>
        {rows.map((r, i) => (
          <div key={i} style={{ background: '#fff', borderRadius: 36, padding: '32px 40px', boxShadow: '0 6px 20px rgba(58,31,26,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
              <span style={{ background: 'var(--ms-pink-faint)', color: 'var(--ms-red)', fontWeight: 800, fontSize: 26, padding: '8px 22px', borderRadius: 20, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{r.tag}</span>
              <span style={{ fontSize: 36, fontWeight: 700, color: 'var(--ms-ink-soft)' }}>{r.phrase}</span>
            </div>
            <div style={{ height: 1, background: 'var(--ms-line)', margin: '24px 0 26px', borderTop: '2px dashed rgba(58,31,26,0.12)', borderBottom: 0, borderLeft: 0, borderRight: 0 }}/>
            <div style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
              <CatIcon kind={r.kind} size={104} radius={26}/>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 50, fontWeight: 800, lineHeight: 1 }}>{r.cat}</div>
                {r.sub && <div style={{ fontSize: 28, color: 'var(--ms-muted)', marginTop: 6, fontWeight: 600 }}>{r.sub}</div>}
              </div>
              <div style={{ fontSize: 50, fontWeight: 800 }}>{r.amt}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Pager dots */}
      <div style={{ position: 'absolute', bottom: 260, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 16 }}>
        {[0,1,2,3].map(i => (
          <div key={i} style={{ width: 14, height: 14, borderRadius: 7, background: i === 2 ? 'var(--ms-red)' : 'rgba(58,31,26,0.18)' }}/>
        ))}
      </div>

      {/* CTA button */}
      <div style={{ position: 'absolute', bottom: 70, left: 48, right: 48 }}>
        <div style={{ background: 'var(--ms-red)', borderRadius: 36, padding: '44px 0', textAlign: 'center', color: '#fff', fontWeight: 700, fontSize: 46 }}>Дальше</div>
      </div>
      <div className="ms-bottom-indicator"/>
    </div>
  );
}

Object.assign(window, { VoiceParsedScreen });
