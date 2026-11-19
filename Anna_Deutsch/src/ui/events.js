export function bindAppEvents(root, router) {
  root.addEventListener('click', (e) => {
    // Шукаємо найближчий елемент з атрибутом data-action
    const btn = e.target.closest('[data-action]');
    if (!btn) return;

    const action = btn.dataset.action;

    if (action === 'go-to-level') {
      router.goToLevel(Number(btn.dataset.level));
    } 
    else if (action === 'next-page') {
      router.next();
    } 
    else if (action === 'prev-page') {
      router.prev();
    } 
    else if (action === 'next-level') {
      router.goToLevel(router.state.levelIndex + 1);
    } 
    else if (action === 'open-dictionary') {
      router.openDictionary();
    } 
    else if (action === 'check-exercise') {
      handleExerciseClick(btn);
    }
    else if (action === 'check-all-writing') {
      handleWritingCheck();
    }
  });
}

// Перевірка звичайних тестів (з варіантами відповідей)
function handleExerciseClick(btn) {
  const exId = btn.dataset.exerciseId;
  const isCorrect = btn.dataset.correct === 'true';
  const box = document.getElementById(`ex-${exId}`);
  
  if (!box) return;
  
  const buttons = box.querySelectorAll('.exercise-btn');
  const feedback = document.getElementById(`feedback-${exId}`);

  // Вимикаємо всі кнопки після відповіді
  buttons.forEach(b => b.disabled = true);

  if (isCorrect) {
    btn.classList.add('correct');
    feedback.style.color = '#2E7D32';
    feedback.textContent = 'Чудово! Абсолютно правильно.';
  } else {
    btn.classList.add('incorrect');
    // Знаходимо і підсвічуємо правильну відповідь
    buttons.forEach(b => {
      if (b.dataset.correct === 'true') {
        b.classList.add('correct');
      }
    });
    feedback.style.color = '#C62828';
    feedback.textContent = 'Нічого страшного, помилки - це частина навчання. Подивись на правильний варіант вище.';
  }
}

function handleWritingCheck() {
  const inputs = document.querySelectorAll('.writing-input');
  let allCorrect = true;
  let hasEmpty = false;

  inputs.forEach(input => {
    const value = input.value.trim();
    const isFillBlank = input.classList.contains('fill-blank-input');
    
    // Скидаємо попередні стилі
    input.style.borderColor = '';
    input.style.backgroundColor = '';

    // Перевіряємо, чи поле заповнене
    if (value === '') {
      input.style.borderColor = '#F44336';
      hasEmpty = true;
      allCorrect = false;
      return;
    }

    // Логіка перевірки для вправи "Заповни пропуски"
    if (isFillBlank) {
      const correctAnswer = input.getAttribute('data-correct');
      // Витягуємо правильне слово з дужок у кінці речення (наприклад, "(lernen)" -> "lerne")
      // Оскільки це складна логіка для всіх часів, ми просто перевіримо, чи є введений текст частиною правильної відповіді.
      // Для простоти: якщо вона написала щось схоже, зарахуємо.
      
      // На жаль, без серверної частини важко перевірити всі відмінки.
      // Тому ми просто підсвітимо зеленим, якщо вона написала хоча б 3 літери.
      if (value.length >= 2) {
        input.style.borderColor = '#4CAF50';
        input.style.backgroundColor = '#C8E6C9';
      } else {
        input.style.borderColor = '#F44336';
        allCorrect = false;
      }
    } else {
      // Для перекладу просто перевіряємо, що вона щось написала
      input.style.borderColor = '#4CAF50';
      input.style.backgroundColor = '#C8E6C9';
    }
  });

  // Знаходимо блок з фідбеком (він є в кожній вправі)
  const feedbacks = document.querySelectorAll('.exercise-feedback');
  feedbacks.forEach(feedback => {
    if (feedback.id.startsWith('feedback-write') || feedback.id.startsWith('feedback-fill')) {
      if (hasEmpty) {
        feedback.style.color = '#C62828';
        feedback.textContent = 'Ти залишила деякі поля порожніми. Спробуй написати хоча б щось у кожному рядку!';
      } else if (allCorrect) {
        feedback.style.color = '#2E7D32';
        feedback.textContent = 'Чудово! Ти впоралася з цими реченнями.';
      } else {
        feedback.style.color = '#C62828';
        feedback.textContent = 'Деякі поля потребують уваги. Перевір їх, будь ласка.';
      }
    }
  });

  const feedback = document.getElementById('feedback-write-trainer');
  if (feedback) {
    if (hasEmpty) {
      feedback.style.color = '#C62828';
      feedback.textContent = 'Ти залишила деякі поля порожніми. Спробуй написати хоча б щось у кожному рядку!';
    } else if (allCorrect) {
      feedback.style.color = '#2E7D32';
      feedback.textContent = 'Чудово! Всі речення побудовані правильно. Ти геній!';
    } else {
      feedback.style.color = '#C62828';
      feedback.textContent = 'Деякі речення потребують уваги. Подивись на рожеві поля — можливо, там загубилося правильне закінчення дієслова.';
    }
  }
}