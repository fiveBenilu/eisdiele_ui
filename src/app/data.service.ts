import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private items = [
    { name: 'Item 1', price: 10 },
    { name: 'Item 2', price: 20 },
    { name: 'Item 3', price: 30 }
  ];

  getItems() {
    return this.items;
  }

  addItem(item: { name: string, price: number }) {
    this.items.push(item);
  }

  constructor() { }
}
