
import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './shared/components/stores/store/store.component';
import { StoresComponent } from './shared/components/stores/stores.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SearchComponent } from './shared/components/search/search.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ViewComponent } from './shared/components/stores/view/view.component';
import { MntProductComponent } from './shared/components/stores/register/mnt-product/mnt-product.component';
import { MntStoreComponent } from './shared/components/stores/register/mnt-store/mnt-store.component';


const routes: Routes = [
    { path: 'store/:id', component: MntStoreComponent },
    { path: 'store', component: MntStoreComponent },
    { path: 'product/:id', component: MntProductComponent },
    { path: 'product', component: MntProductComponent },
    { path: '', component: ViewComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

/*@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }*/

