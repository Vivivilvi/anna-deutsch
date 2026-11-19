import { State } from './State.js';
import { Router } from './Router.js';
import { renderApp } from '../ui/renderers.js';
import { bindAppEvents } from '../ui/events.js';

export class App {
  constructor({ levels, dictionary, mountEl }) {
    this.levels = levels;
    this.dictionary = dictionary;
    this.mount = mountEl;
    
    this.state = new State({ levelIndex: 0, pageIndex: 0, view: 'level' });
    this.router = new Router(this.state, this.levels, () => this.render());
  }

  init() {
    // Прив'язуємо події один раз до контейнера
    bindAppEvents(this.mount, this.router);
    // Малюємо перший екран
    this.render();
  }

  render() {
    this.mount.innerHTML = renderApp(this.state, this.levels, this.dictionary);
    // Прокрутка вгору при зміні сторінки
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}