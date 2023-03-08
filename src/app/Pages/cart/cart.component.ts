import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent  implements OnInit{
  @Input() item: any;
  
  cartItems: any[] = []

  constructor(private cartService:CartService){}

  ngOnInit(): void {
    this.cartItems = this.cartService.getAllCartItems();
  }
  
  
}
