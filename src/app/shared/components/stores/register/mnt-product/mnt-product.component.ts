

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from '../../store/store.service';
import { ProductService } from '../../../stores/register/mnt-product/product.service';
import { Store } from './../../store/store.models';
import { Product } from './product.models';
import swal from 'sweetalert2';

@Component({
  selector: 'app-mnt-product',
  templateUrl: './mnt-product.component.html',
  styleUrls: ['./mnt-product.component.css']
})
export class MntProductComponent implements OnInit {


  store$1: Observable<any>;
  selectedStores = [];
  product:Product = new Product();

  constructor(private storeService:StoreService, private productService:ProductService) { }

  ngOnInit() {
    this.store$1 = this.storeService.listAllStores();
  }

  public save(){
    this.product.stores = this.selectedStores;
    this.productService.save(this.product).subscribe(result => {
      swal('Aviso', result['message'], 'success');
      this.product = new Product();
      this.selectedStores = [];
    });
  }

}
