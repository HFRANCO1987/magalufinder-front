import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mnt-store',
  templateUrl: './mnt-store.component.html',
  styleUrls: ['./mnt-store.component.css']
})
export class MntStoreComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

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
    console.log("SAVE - STORE");
  }

}
