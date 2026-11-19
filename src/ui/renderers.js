import { escapeHtml } from './escape.js';

// Допоміжна функція для форматування тексту
function formatText(text) {
  if (!text) return '';
  let safeText = escapeHtml(text);
  safeText = safeText.replace(/\*(.*?)\*/g, '<strong>$1</strong>');
  safeText = safeText.replace(/_(.*?)_/g, '<u class="text-underline">$1</u>');
  safeText = safeText.replace(/\n/g, '<br>');
  return safeText;
}

// SVG-прапори
const flagDE = `<svg class="svg-flag" viewBox="0 0 5 3"><rect width="5" height="1" fill="#000"/><rect y="1" width="5" height="1" fill="#DD0000"/><rect y="2" width="5" height="1" fill="#FFCE00"/></svg>`;
const flagUA = `<svg class="svg-flag" viewBox="0 0 3 2"><rect width="3" height="1" fill="#0057B7"/><rect y="1" width="3" height="1" fill="#FFD700"/></svg>`;

export function renderApp(state, levels, dictionary) {
  let html = `
    <header class="app__header">
      <div class="app__progress">
        ${state.view === 'dictionary' ? '📖 Словник' : `Рівень ${levels[state.levelIndex].id} · Сторінка ${state.pageIndex + 1} з ${levels[state.levelIndex].pages.length || 1}`}
      </div>
      <nav class="nav-levels">
  `;

  levels.forEach((lvl, idx) => {
    const activeClass = (state.view === 'level' && state.levelIndex === idx) ? 'active' : '';
    html += `<button class="btn-level ${activeClass}" data-action="go-to-level" data-level="${idx}">Рівень ${lvl.id}</button>`;
  });

  html += `
        <button class="btn-dict ${state.view === 'dictionary' ? 'active' : ''}" data-action="open-dictionary">📖 Словник</button>
      </nav>
    </header>
    <main class="app__main">
  `;

  if (state.view === 'dictionary') {
    html += renderPage(dictionary);
    html += `<div class="page-nav"><button class="btn btn--secondary" data-action="go-to-level" data-level="${state.levelIndex}">← Назад до рівня</button></div>`;
  } else {
    const level = levels[state.levelIndex];
    
    if (level.locked) {
      html += `
        <div class="floating-pets">🐾 🐱 🐾</div>
        <h1 class="page__title">${escapeHtml(level.title)} - готується з любов'ю</h1>
        <p class="page__text">Цей рівень ще в розробці. Він буде присвячений таким темам: <strong>${escapeHtml(level.previewInfo)}</strong>.</p>
        <p class="page__text">Тут не буде нудних правил чи поспіху. Тільки те, що допоможе тобі розкрити мову в твоєму власному темпі.</p>
        <div class="page-nav"><button class="btn btn--secondary" data-action="go-to-level" data-level="0">← Назад до Рівня 1</button></div>
      `;
    } else {
      const page = level.pages[state.pageIndex];
      html += renderPage(page);

      html += `<div class="page-nav">`;
      if (state.levelIndex > 0 || state.pageIndex > 0) {
        html += `<button class="btn btn--secondary" data-action="prev-page">← Назад</button>`;
      } else {
        html += `<div></div>`;
      }

      if (state.pageIndex < level.pages.length - 1) {
        html += `<button class="btn" data-action="next-page">Далі →</button>`;
      } else if (state.levelIndex < levels.length - 1) {
        html += `<button class="btn" data-action="next-level">Наступний рівень →</button>`;
      } else {
        html += `<button class="btn" data-action="go-to-level" data-level="0">Повернутись на початок 🩷</button>`;
      }
      html += `</div>`;
    }
  }

  html += `</main>`;
  return html;
}

function renderPage(page) {
  if (!page) return '';

  let html = `
    <div class="floating-pets">🐱 🐾 🐈</div>
    <h1 class="page__title">${escapeHtml(page.title)}</h1>
    ${page.subtitle ? `<div class="page__subtitle">${escapeHtml(page.subtitle)}</div>` : ''}
  `;

  // Рендер основних блоків
  page.blocks.forEach(block => {
    html += `<div class="page__block">`;
    if (block.heading) html += `<h3 class="page__subtitle">${escapeHtml(block.heading)}</h3>`;
    
    if (block.text) {
      html += `<p class="page__text">${formatText(block.text)}</p>`;
    }
    
    if (block.html) {
      html += block.html;
    }

    if (block.examples && block.examples.length > 0) {
      html += `<div class="card">`;
      block.examples.forEach(ex => {
        html += `
          <div class="example-item">
            <div class="example-de">${flagDE} ${formatText(ex.de)}</div>
            <div class="example-ua">${flagUA} ${formatText(ex.ua)}</div>
            ${ex.tip ? `<div class="example-tip">💡 ${formatText(ex.tip)}</div>` : ''}
          </div>
        `;
      });
      html += `</div>`;
    }
    html += `</div>`;
  });

  // Рендер вправ
  if (page.exercises && page.exercises.length > 0) {
    html += `<div class="page__block"><h3 class="page__subtitle">Практичні вправи</h3>`;
    
    page.exercises.forEach((ex, exIdx) => {
      
      // Якщо це звичайна вправа з варіантами
      if (ex.type !== 'writing') {
        html += `
          <div class="exercise-box" id="ex-${escapeHtml(ex.id)}">
            <p class="page__text"><strong>Вправа ${exIdx + 1}.</strong> ${formatText(ex.question)}</p>
            <div class="exercise-options">
        `;
        ex.options.forEach((opt, optIdx) => {
          html += `<button class="exercise-btn" data-action="check-exercise" data-exercise-id="${escapeHtml(ex.id)}" data-option-index="${optIdx}" data-correct="${opt.correct}">${formatText(opt.text)}</button>`;
        });
        html += `
            </div>
            <div class="exercise-feedback" id="feedback-${escapeHtml(ex.id)}"></div>
          </div>
        `;
      } 
      // Якщо це вправа на письмо
      else {
        html += `
          <div class="exercise-box" id="ex-${escapeHtml(ex.id)}">
            <p class="page__text"><strong>Вправа ${exIdx + 1}.</strong> ${formatText(ex.question)}</p>
            <div class="writing-trainer">
        `;
        
        ex.words.forEach((wordItem, wIdx) => {
          // Якщо є стартове слово (переклад)
          if (wordItem.startWord) {
            html += `
              <div class="writing-row">
                <div class="writing-level">${wordItem.level}</div>
                <div class="writing-task">
                  <span class="writing-prompt">${wordItem.prompt}</span>
                  <div class="writing-line-container">
                    <span class="writing-start-word">${wordItem.startWord}</span>
                    <input type="text" class="writing-input" data-action="check-writing" placeholder="...">
                  </div>
                </div>
              </div>
            `;
          } 
          // Якщо це вправа на заповнення пропусків
          else {
            html += `
              <div class="writing-row">
                <div class="writing-level">${wordItem.level}</div>
                <div class="writing-task">
                  <div class="writing-line-container">
                    <span class="writing-fill-text">${wordItem.prompt}</span>
                    <input type="text" class="writing-input fill-blank-input" data-action="check-writing" placeholder="...">
                  </div>
                </div>
              </div>
            `;
          }
        });
        
        html += `
            </div>
            <button class="btn btn--secondary check-writing-btn" data-action="check-all-writing">Перевірити</button>
            <div class="exercise-feedback" id="feedback-${escapeHtml(ex.id)}"></div>
          </div>
        `;
      }
    }); // <--- ОСЬ ЦЯ ДУЖКА БУЛА ЗАГУБЛЕНА
    
    html += `</div>`;
  }

  // Рендер блоків, які йдуть ПІСЛЯ вправ
  if (page.blocksAfterExercises && page.blocksAfterExercises.length > 0) {
    page.blocksAfterExercises.forEach(block => {
      html += `<div class="page__block">`;
      if (block.heading) html += `<h3 class="page__subtitle">${escapeHtml(block.heading)}</h3>`;
      if (block.text) html += `<p class="page__text">${formatText(block.text)}</p>`;
      if (block.html) html += block.html;
      html += `</div>`;
    });
  }

  // Рендер словникових таблиць
  if (page.vocabTables && page.vocabTables.length > 0) {
    page.vocabTables.forEach(table => {
      html += `
        <div class="page__block">
          <h3 class="page__subtitle">${escapeHtml(table.title)}</h3>
          <div class="dict-table-container">
            <table class="dict-table">
              <thead><tr><th>Слово</th><th>Переклад</th><th>Приклад використання</th></tr></thead>
              <tbody>
      `;
      table.rows.forEach(row => {
        html += `
          <tr>
            <td><strong>${formatText(row.term)}</strong></td>
            <td>${formatText(row.translation)}</td>
            <td>
              <div class="example-de">${flagDE} ${formatText(row.exampleDe)}</div>
              <div class="example-ua">${flagUA} ${formatText(row.exampleUa)}</div>
            </td>
          </tr>
        `;
      });
      html += `</tbody></table></div></div>`;
    });
  }

  return html;
}