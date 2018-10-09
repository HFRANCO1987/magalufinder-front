
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from '../../store/store.service';
import { Store } from './../../store/store.models';

@Component({
  selector: 'app-mnt-product',
  templateUrl: './mnt-product.component.html',
  styleUrls: ['./mnt-product.component.css']
})
export class MntProductComponent implements OnInit {


  store$1: Observable<Store[]>;
  selectedStores = [];

  constructor(private storeService:StoreService) { }

  ngOnInit() {
    this.store$1 = this.storeService.listAllStores();
  }

  public save(){
    console.log("SAVE - PRODUCT");
  }

}
