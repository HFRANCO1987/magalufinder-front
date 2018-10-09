
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './shared/components/stores/store/store.component';
import { StoresComponent } from './shared/components/stores/stores.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SearchComponent } from './shared/components/search/search.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ViewComponent } from './shared/components/stores/view/view.component';



const routes: Routes = [
    { path: '**', component: ViewComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

