import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopComponent } from './shop.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const routes = [
    { path: '', component: ShopComponent },
    { path: ':id', component: ProductDetailsComponent, data: { breadcrumb: { alias: 'productDetails'}} },
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ShopRoutingModule {}
