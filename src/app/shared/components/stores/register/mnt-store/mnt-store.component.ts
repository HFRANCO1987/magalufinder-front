
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '../../store/store.models';
import swal from 'sweetalert2';
import { StoreService } from './../../store/store.service';

@Component({
  selector: 'app-mnt-store',
  templateUrl: './mnt-store.component.html',
  styleUrls: ['./mnt-store.component.css']
})
export class MntStoreComponent implements OnInit {

  loginForm: FormGroup;
  store:Store = new Store();

  constructor(private fb: FormBuilder, private storeService:StoreService) { }

  ngOnInit() {
    this.mountForm();
  }

  mountForm() {
    this.loginForm = this.fb.group({
      codigo: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      cep: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public save(){
    this.storeService.save(this.store).subscribe(result => {
      swal('Aviso', result['data'], 'success');
      this.store = new Store();
    });
  }

}
