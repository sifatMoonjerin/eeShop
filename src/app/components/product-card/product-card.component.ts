import { CartService } from './../../services/cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() item: Product;

  constructor(private cart: CartService) { }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.cart.addProduct(this.item);
  }

}
