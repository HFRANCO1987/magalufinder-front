
import { StoreService } from './../store/store.service';
import { Component, OnInit } from '@angular/core';
import { Store } from './../store/store.models';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  stores: Store[] = [];

  constructor(private storeService: StoreService) { }

  ngOnInit() {
  }

  public findByStores(evento){
   this.storeService.listStoresByProductAddress(evento.product,evento.zipCode)
      .subscribe(result => {
        this.stores = result.data;
        console.log(this.stores[0].description);
      });
  }

  public clear(){
    this.stores = [];
  }

}
