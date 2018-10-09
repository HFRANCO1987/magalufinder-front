

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Product } from './product.models';

const API = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  listAllProduct() : Observable<Product[]> {
    return this.http.get(API + '/api/products').pipe(map((res) => res.data)));
  }

  save(product:Product){
    return this.http.post(API + '/api/product/save', JSON.stringify(product), {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    });
  }

}
