
import { StoreService } from './../store/store.service';
import { Component, OnInit } from '@angular/core';
import { Store } from './../store/store.models';
import swal from 'sweetalert2';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  stores: any = [];

  constructor(private storeService: StoreService) { }

  ngOnInit() {
  }

  public findByStores(evento){
   this.storeService.listStoresByProductAddress(evento.product,evento.zipCode)
      .subscribe(result => {
        if (result.data == null || result.data.length == 0){
          swal('Aviso', 'Nenhuma loja foi encontrada com os dados informados!', 'warning');
        }else{
          this.stores = result.data;
        }
      });
  }

  public clear(evento){
    this.stores = [];
  }

}
