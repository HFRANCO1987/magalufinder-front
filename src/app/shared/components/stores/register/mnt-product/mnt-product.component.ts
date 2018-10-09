

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from '../../store/store.service';
import { ProductService } from '../../../stores/register/mnt-product/product.service';
import { Store } from './../../store/store.models';
import { Product } from './product.models';

@Component({
  selector: 'app-mnt-product',
  templateUrl: './mnt-product.component.html',
  styleUrls: ['./mnt-product.component.css']
})
export class MntProductComponent implements OnInit {


  store$1: Observable<Store[]>;
  selectedStores = [];
  product:Product = {};

  constructor(private storeService:StoreService, private productService:ProductService) { }

  ngOnInit() {
    this.store$1 = this.storeService.listAllStores();
  }

  public save(){
    this.product.stores = this.selectedStores;
    this.productService.save(this.product).subscribe(result => {
      console.log(result);
    });
  }

}
