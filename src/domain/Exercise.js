export class Exercise {
  constructor({ id, question, options }) {
    this.id = id;
    this.question = question;
    this.options = options;
  }

  check(index) {
    return this.options[index]?.correct === true;
  }

  correctIndex() {
    return this.options.findIndex(o => o.correct);
  }
}