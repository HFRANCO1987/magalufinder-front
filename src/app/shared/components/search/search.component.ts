import { Component, OnInit, ViewChild, DoCheck, Input, Output, EventEmitter } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { AddressComponent } from 'ngx-google-places-autocomplete/objects/addressComponent';
import { ComponentRestrictions } from 'ngx-google-places-autocomplete/objects/options/componentRestrictions';
import { StoreService } from './../stores/store/store.service';
import { element } from 'protractor';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild("placesRef") placesRef : GooglePlaceDirective;

  @Output() searchStores = new EventEmitter();
  @Output() clear = new EventEmitter();

  zipCode:string;
  product:string;
  address:string;

  //Restrição de endereços somente do Brasil
  options = {
    componentRestrictions: {country: "BR"}
  };

  constructor(private storeService: StoreService) { }

  ngOnInit() {
  }

  public onMountObjectSearch(){
    this.searchStores.emit({zipCode: this.zipCode, product: this.product});
  }

  public onClear(){
    this.clear.emit({});
  }

  public handleAddressChange(address: Address) {
    this.getZipCode(address.address_components)
  }

  getZipCode(addresComponets:AddressComponent[]){
    this.zipCode = null;
    for (let index = 0; index < addresComponets.length; index++) {
      const element = addresComponets[index];
      if (element.types[0]=='postal_code'){
        this.zipCode = element.long_name;
        break;
      }
    }
  }



}
