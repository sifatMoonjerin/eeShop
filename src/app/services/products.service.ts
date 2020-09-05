import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

const productsURL = 'https://fakestoreapi.com/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(productsURL);
  }

  getCategories(): Observable<Product[]>{
    return this.http.get<Product[]>(productsURL);
  }
}
