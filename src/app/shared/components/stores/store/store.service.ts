import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from './store.models';

const API = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  /*listAllStores() {
    return this.http.get<Store[]>(API + '/api/store/getAll');
  }*/

  listStoresByProductAddress(product:string, address:string) {
    return this.http.get<Store[]>(API + '/api/store/search/' + product + "/" + address);
  }
  
}
