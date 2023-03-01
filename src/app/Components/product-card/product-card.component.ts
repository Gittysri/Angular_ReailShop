import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent {
  public products = [
    {
      image: "../images/Iphone.png",
      name: "Iphone 12 Pro",
      category: "Smart Phone",
      description: "Phone",
      price: 150000

  },
  {
      image: "../images/Samsung.png",
      name: "Samsung S 22",
      category: "Smart Phone",
      description: "Phone",
      price: 80000
  }
];
constructor() {}


}
