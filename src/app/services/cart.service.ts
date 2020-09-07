import { CartProduct } from './../models/cart-product';
import { Product } from '../models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartProduct[] = [];

  constructor() { }

  getCart(): CartProduct[]{
    return this.cart;
  }

  addProduct(prod: Product): void{
    const index = this.cart.findIndex(p => p.id === prod.id);
    if (index === -1) {
      this.cart.push({...prod, quantity: 1});
    } else {
      this.cart[index].quantity++;
    }
  }

  removeFromCart(id: number): CartProduct[] {
    this.cart = this.cart.filter(p => p.id !== id);
    return this.cart;
  }
}
