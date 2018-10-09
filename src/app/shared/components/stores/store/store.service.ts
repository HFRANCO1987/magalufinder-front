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

  listAllStores() : Observable<Store[]> {
    return this.http.get(API + '/api/stores').pipe(map((res) => res.data)));
  }

  save(store:Store){
    console.log("Parametros: " + JSON.stringify(store));
    this.http.post(API + '/api/store/save', JSON.stringify(store), {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    });
  }

  listStoresByProductAddress(product:string, address:string) {
    return this.http.get<Store[]>(API + '/api/store/search/' + product + "/" + address);
  }

}
