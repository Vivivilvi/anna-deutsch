export class State {
  constructor(initial = {}) {
    this.levelIndex = initial.levelIndex || 0;
    this.pageIndex = initial.pageIndex || 0;
    this.view = initial.view || 'level'; // 'level' | 'dictionary'
  }

  setLevel(index, pageIndex = 0) {
    this.levelIndex = index;
    this.pageIndex = pageIndex;
    this.view = 'level';
  }

  setPage(index) {
    this.pageIndex = index;
    this.view = 'level';
  }

  setDictionary() {
    this.view = 'dictionary';
  }

  snapshot() {
    return {
      levelIndex: this.levelIndex,
      pageIndex: this.pageIndex,
      view: this.view
    };
  }
}