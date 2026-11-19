// Словник. Тільки дані.
// Щоб додати слово: додай рядок у відповідну таблицю rows.

export const dictionary = {
  id: "dict",
  title: "📖 Базовий вортшатц - 20 слів, які треба знати",
  subtitle: "Це не весь словник. Це 20 слів, які допоможуть тобі відповідати на питання зі сторінок 1-6. Вчи по 3-4 на день - не більше. Повторюй - і воно осіне.",
  blocks: [
    {
      heading: "💡 Порада",
      text: "Вчи не всі 20 одразу. Візьми 3 іменники + 3 дієслова на тиждень. Повторюй їх у реченнях - не окремо."
    }
  ],
  vocabTables: [
    {
      title: "Іменники (з артиклями)",
      rows: [
        { term: "die Sprache", translation: "мова", exampleDe: "Die deutsche Sprache ist schwer, aber schön.", exampleUa: "Німецька мова складна, але гарна." },
        { term: "das Wort", translation: "слово", exampleDe: "Ich kenne dieses Wort nicht.", exampleUa: "Я не знаю цього слова." },
        { term: "der Satz", translation: "речення", exampleDe: "Der Satz ist zu lang.", exampleUa: "Речення занадто довге." },
        { term: "die Frage", translation: "питання", exampleDe: "Ich habe eine Frage.", exampleUa: "У мене є питання." },
        { term: "die Antwort", translation: "відповідь", exampleDe: "Deine Antwort ist richtig.", exampleUa: "Твоя відповідь правильна." },
        { term: "das Gefühl", translation: "почуття", exampleDe: "Ich habe ein gutes Gefühl.", exampleUa: "У мене добре відчуття." },
        { term: "die Energie", translation: "енергія", exampleDe: "Heute habe ich keine Energie.", exampleUa: "Сьогодні в мене немає енергії." },
        { term: "die Pause", translation: "перерва", exampleDe: "Ich brauche eine Pause.", exampleUa: "Мені потрібна перерва." },
        { term: "der Fehler", translation: "помилка", exampleDe: "Fehler sind normal.", exampleUa: "Помилки - це нормально." },
        { term: "der Fortschritt", translation: "прогрес", exampleDe: "Ich mache Fortschritte.", exampleUa: "Я роблю прогрес." }
      ]
    },
    {
      title: "Дієслова",
      rows: [
        { term: "verstehen", translation: "розуміти", exampleDe: "Ich verstehe das nicht.", exampleUa: "Я цього не розумію." },
        { term: "denken", translation: "думати", exampleDe: "Ich denke oft an dich.", exampleUa: "Я часто думаю про тебе." },
        { term: "fühlen", translation: "почуватися / відчувати", exampleDe: "Ich fühle mich müde.", exampleUa: "Я почуваюся втомленою." },
        { term: "brauchen", translation: "потребувати", exampleDe: "Ich brauche Ruhe.", exampleUa: "Мені потрібен спокій." },
        { term: "sprechen", translation: "говорити", exampleDe: "Ich spreche ein bisschen Deutsch.", exampleUa: "Я трохи говорю німецькою." },
        { term: "lernen", translation: "вчити", exampleDe: "Ich lerne jeden Tag.", exampleUa: "Я вчуся щодня." },
        { term: "üben", translation: "практикувати", exampleDe: "Ich übe jeden Tag ein bisschen.", exampleUa: "Я практикуюся щодня потроху." },
        { term: "helfen", translation: "допомагати", exampleDe: "Kannst du mir helfen?", exampleUa: "Можеш мені допомогти?" },
        { term: "hoffen", translation: "сподіватися", exampleDe: "Ich hoffe, dass es klappt.", exampleUa: "Я сподіваюся, що вийде." },
        { term: "weitermachen", translation: "продовжувати", exampleDe: "Ich mache weiter, auch langsam.", exampleUa: "Я продовжую, навіть повільно." }
      ]
    }
  ]
};