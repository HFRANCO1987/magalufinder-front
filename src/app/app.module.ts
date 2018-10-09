import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SearchComponent } from './shared/components/search/search.component';
import { StoresComponent } from './shared/components/stores/stores.component';
import { StoreComponent } from './shared/components/stores/store/store.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ViewComponent } from './shared/components/stores/view/view.component';
import { MntStoreComponent } from './shared/components/stores/register/mnt-store/mnt-store.component';
import { MntProductComponent } from './shared/components/stores/register/mnt-product/mnt-product.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    StoresComponent,
    StoreComponent,
    FooterComponent,
    ViewComponent,
    MntStoreComponent,
    MntProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GooglePlaceModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
