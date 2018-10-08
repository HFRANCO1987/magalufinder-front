import { Component, OnInit, Input } from '@angular/core';
import { Store } from './store.models';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  @Input() id;
  @Input() description;
  @Input() code;
  @Input() value;
  @Input() distance;

  constructor() {
   }

  ngOnInit() {

  }

}
