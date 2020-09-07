import { Product } from './../../models/product';
import { ProductsService } from './../../services/products.service';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  curProduct: Product;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private prodServ: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.prodServ.getProductDetails(p.id).subscribe(prod => {
        this.curProduct = prod;
        this.loading = false;
      });
    });
  }
}
