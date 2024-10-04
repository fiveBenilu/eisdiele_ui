import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

interface Item {
  name: string;
  price: number;
  image?: string;
  category: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: Item[] = [
    { name: 'Eis Kugel', price: 1.5, image: 'assets/images/vanilla.png', category: 'eis' },
    { name: 'Eisbecher', price: 7.5, image: 'assets/images/chocolate.png', category: 'becher' },
    { name: 'Eisbecher Spezial', price: 8, image: 'assets/images/strawberry.png', category: 'becher' },
    { name: 'Kaffee Normal', price: 2.0, image: 'assets/images/mint.png', category: 'getränke' }
  ];
  filteredItems: Item[] = [];
  categories: string[] = [];
  cart: Item[] = [];
  total: number = 0;

  ngOnInit() {
    this.categories = [...new Set(this.items.map(item => item.category))];
    this.filteredItems = this.items;
  }

  filterItems(category: string) {
    this.filteredItems = this.items.filter(item => item.category === category);
  }

  addToCart(item: Item) {
    this.cart.push(item);
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cart.reduce((sum, item) => sum + item.price, 0);
  }
}