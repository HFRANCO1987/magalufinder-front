import { Component, OnInit, Input } from '@angular/core';
import { Store } from './store/store.models';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  @Input() stores:Store[] = [];

  constructor() { }

  ngOnInit() {
  }



}
