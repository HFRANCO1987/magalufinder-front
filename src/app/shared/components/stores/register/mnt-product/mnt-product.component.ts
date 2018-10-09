import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mnt-product',
  templateUrl: './mnt-product.component.html',
  styleUrls: ['./mnt-product.component.css']
})
export class MntProductComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.mountForm();
  }

  mountForm() {
    this.loginForm = this.fb.group({
      codigo: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      value: ['', [Validators.required]]
    });
  }


  public save(){
    console.log("SAVE - PRODUCT");
  }

}
