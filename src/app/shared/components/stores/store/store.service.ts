import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from './store.models';
import { map, catchError } from 'rxjs/operators';

const API = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  listAllStores() : Observable<any> {
    return this.http.get(API + '/api/stores').pipe(map((res) => res.data)));
  }

  save(store:Store){
    return this.http.post(API + '/api/store/save', JSON.stringify(store), {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    });
  }

  listStoresByProductAddress(product:string, address:string) {
    return this.http.get<any>(API + '/api/store/search/' + product + "/" + encodeURI(address));
  }

  
}
