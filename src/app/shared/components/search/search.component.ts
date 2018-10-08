import { element } from 'protractor';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { AddressComponent } from 'ngx-google-places-autocomplete/objects/addressComponent';
import { ComponentRestrictions } from 'ngx-google-places-autocomplete/objects/options/componentRestrictions';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild("placesRef") placesRef : GooglePlaceDirective;

  zipCode:number;

  constructor() { }

  ngOnInit() {
    this.placesRef.options.componentRestrictions = new ComponentRestrictions({
      country: "BR"
    });

    this.placesRef.reset();
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
