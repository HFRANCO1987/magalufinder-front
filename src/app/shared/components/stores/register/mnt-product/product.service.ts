

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.models';

const API = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  listAllProduct() {
    return this.http.get<any[]>(API + '/api/products');
  }

  save(product:Product){
    return this.http.post(API + '/api/product/save', JSON.stringify(product), {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    });
  }

}
