import { Component, OnInit } from '@angular/core';
import { StoreService } from './store/store.service';
import { Store } from './store/store.models';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  stores: Store[] = [];

  constructor(private storeService: StoreService) { }

  ngOnInit() {
   /* this.storeService.listAllStores()
      .subscribe(result => {
          //this.stores = result.data;
          //console.log(this.stores[0].description);
        }
      );*/


  }

}
