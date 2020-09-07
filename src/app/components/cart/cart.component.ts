import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/models/cart-product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: CartProduct[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(id: number): void {
    this.cart = this.cartService.removeFromCart(id);
  }
}
