export class Router {
  constructor(state, levels, onChange) {
    this.state = state;
    this.levels = levels;
    this.onChange = onChange;
  }

  goToLevel(levelIndex) {
    if (levelIndex < 0 || levelIndex >= this.levels.length) return;
    this.state.setLevel(levelIndex);
    this.onChange();
  }

  goToPage(pageIndex) {
    const pages = this.levels[this.state.levelIndex].pages;
    if (pageIndex < 0 || pageIndex >= pages.length) return;
    this.state.setPage(pageIndex);
    this.onChange();
  }

  next() {
    const currentLevel = this.levels[this.state.levelIndex];
    if (this.state.pageIndex < currentLevel.pages.length - 1) {
      this.state.setPage(this.state.pageIndex + 1);
    } else if (this.state.levelIndex < this.levels.length - 1) {
      this.state.setLevel(this.state.levelIndex + 1);
    }
    this.onChange();
  }

  prev() {
    if (this.state.pageIndex > 0) {
      this.state.setPage(this.state.pageIndex - 1);
    } else if (this.state.levelIndex > 0) {
      const prevLevel = this.levels[this.state.levelIndex - 1];
      this.state.setLevel(this.state.levelIndex - 1, Math.max(0, prevLevel.pages.length - 1));
    }
    this.onChange();
  }

  openDictionary() {
    this.state.setDictionary();
    this.onChange();
  }
}