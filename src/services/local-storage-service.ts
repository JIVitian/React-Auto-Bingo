import { Bingo } from '../types/Bingo';

export const LocalStorageService = {
  // Get all items from local storage
  getAll: function (): Bingo[] {
    return JSON.parse(localStorage.getItem('bingos') || '[]');
  },

  // Set all items to local storage
  setBingos(items: Bingo[]): void {
    localStorage.setItem('bingos', JSON.stringify(items));
  },

  // Get item from local storage by id
  getById: function (id: number) {
    const items: Bingo[] = this.getAll();

    return items.find(item => item.bingoId === id);
  },

  // Add item to local storage
  add: function (item: Bingo) {
    this.setBingos([...this.getAll(), item]);
  },

  // Update item in local storage
  update: function (item: Bingo) {
    const items = this.getAll();

    const index = items.findIndex(i => i.bingoId === item.bingoId);

    items[index] = item;

    localStorage.setItem('bingos', JSON.stringify(items));
  },

  // Delete item from local storage
  delete: function (id: number) {
    const items = this.getAll();

    const index = items.findIndex(i => i.bingoId === id);

    items.splice(index, 1);

    localStorage.setItem('bingos', JSON.stringify(items));
  },

  // Delete all items from local storage
  deleteAll: function () {
    localStorage.removeItem('bingos');
  },
};
