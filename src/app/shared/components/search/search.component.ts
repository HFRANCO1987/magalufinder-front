import { element } from 'protractor';
import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { AddressComponent } from 'ngx-google-places-autocomplete/objects/addressComponent';
import { ComponentRestrictions } from 'ngx-google-places-autocomplete/objects/options/componentRestrictions';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, DoCheck {

  @ViewChild("placesRef") placesRef : GooglePlaceDirective;

  zipCode:number;

  //Restrição de endereços somente do Brasil
  options = {
    componentRestrictions: {country: "BR"}
  };

  constructor() { }

  ngOnInit() {
  }

  public handleAddressChange(address: Address) {
    this.getZipCode(address.address_components)
    console.log(this.zipCode);
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
