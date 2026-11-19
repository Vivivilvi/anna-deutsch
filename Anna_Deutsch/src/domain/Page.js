export class Page {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.subtitle = data.subtitle || "";
    this.blocks = data.blocks || [];
    this.vocabTables = data.vocabTables || [];
    this.exercises = data.exercises || [];
  }
}