// ============================================
// Точка входу застосунку.
// Єдине, що робить цей файл:
//   1. Імпортує залежності
//   2. Знаходить #app у DOM
//   3. Створює App і запускає його
// Більше нічого. Жодної логіки рендеру чи навігації тут немає.
// ============================================

import { App } from './app/App.js';
import { levels } from './content/levels/index.js';
import { dictionary } from './content/dictionary.js';

// --- 1. Перевірка, що HTML має точку монтування ---
const mountEl = document.getElementById('app');

if (!mountEl) {
  // Якщо хтось випадково видалив <div id="app"> з index.html —
  // краще впасти з чітким повідомленням, ніж мовчки нічого не показати.
  throw new Error(
    '[main.js] Не знайдено елемент #app. Перевір index.html: <div class="app" id="app"></div>'
  );
}

// --- 2. Створення та запуск застосунку ---
const app = new App({
  levels,
  dictionary,
  mountEl
});

app.init();

// --- 3. (Опційно) Експорт для дебагу в консолі ---
// У продакшені краще прибрати, але під час розробки зручно:
//   app.router.next()
//   app.state.snapshot()
// Працює ЛИШЕ якщо ти сам відкриєш консоль — глобального `window.app` немає.
if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
  window.__app = app;
}