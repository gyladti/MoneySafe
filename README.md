# MoneySafe — Landing page

Одностраничный сайт для приложения **MoneySafe** (умный учёт расходов голосом).

## Развёртывание на GitHub Pages

1. Создай новый репозиторий на GitHub (например, `moneysafe-landing`).
2. Скопируй все файлы из этой папки в корень репозитория.
3. В настройках репозитория → **Settings** → **Pages**:
   - Source: `Deploy from a branch`
   - Branch: `main` (или `master`), folder: `/ (root)`
4. Через минуту сайт будет доступен по адресу `https://<username>.github.io/moneysafe-landing/`

## Файлы

- `index.html` — главная (и единственная) страница
- `tokens.css` — цвета, шрифты, тени
- `app-screens.jsx` — компоненты экранов приложения для мокапа iPhone в hero/voice-блоках

## Кастомизация

- Текст и ссылки на App Store: внутри `index.html`
- Цвета: переменные `--ms-*` в `tokens.css`
- Скриншоты в телефонах: компоненты `MainScreen` / `VoiceScreen` в `app-screens.jsx`

## Технологии

Чистый HTML/CSS + React (UMD) для рендеринга мокапов iPhone. Никакой сборки не требуется — открывается напрямую в браузере.
