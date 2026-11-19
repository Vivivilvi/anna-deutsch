export class Level {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.locked = data.locked || false;
    this.previewInfo = data.previewInfo || null;
    // Перетворюємо масив звичайних об'єктів у масив екземплярів класу Page
    this.pages = (data.pages || []).map(pageData => new Page(pageData));
  }
}