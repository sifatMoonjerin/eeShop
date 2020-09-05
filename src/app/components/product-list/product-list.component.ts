import { ProductsService } from './../../services/products.service';
import { Product } from '../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  curCategory = 'all products';

  constructor(private prodServe: ProductsService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  private loadProducts(): void {
    this.prodServe.getProducts().subscribe(prods => {
        this.products = prods;
    });
  }

  private loadCategories(): void {
    this.prodServe.getCategories().subscribe(prods => {
      this.categories = ['all products', ...new Set(prods.map(p => p.category))];
    });
  }

}
