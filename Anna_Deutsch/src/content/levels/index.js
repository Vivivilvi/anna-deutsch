import { level1 } from './level1.js';
import { level2 } from './level2.js';

export const levels = [
  level1,
  level2,
  {
    id: 3,
    title: "Рівень 3",
    locked: true,
    previewInfo: "Akkusativ, Dativ та підрядні речення з weil/dass"
  },
  {
    id: 4,
    title: "Рівень 4",
    locked: true,
    previewInfo: "Trennbare Verben та Reflexive Verben (дієслова та емоції)"
  },
  {
    id: 5,
    title: "Рівень 5",
    locked: true,
    previewInfo: "Präteritum та Passiv - вихід на впевнений рівень B1"
  }
];