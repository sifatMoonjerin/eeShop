import { ProductsService } from './../../services/products.service';
import { Product } from '../../models/product';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  categories: string[] = [];
  curCategory = 'all products';
  productsSub: Subscription;
  categoriesSub: Subscription;

  constructor(private prodServe: ProductsService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  private loadProducts(): void {
    this.productsSub = this.prodServe.getProducts().subscribe(prods => {
        this.products = prods;
    });
  }

  private loadCategories(): void {
    this.categoriesSub = this.prodServe.getCategories().subscribe(prods => {
      this.categories = ['all products', ...new Set(prods.map(p => p.category))];
    });
  }

  ngOnDestroy(): void {
    this.productsSub.unsubscribe();
    this.categoriesSub.unsubscribe();
  }

}
