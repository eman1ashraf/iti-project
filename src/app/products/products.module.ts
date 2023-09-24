import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SharedModule } from "../shared/shared.module";
import { ProductComponent } from './components/product/product.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
    declarations: [
        AllproductsComponent,
        ProductDetailsComponent,
        ProductComponent

    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        FormsModule,
        AppRoutingModule,


    ],
    exports:[
      ProductDetailsComponent
    ]
})
export class ProductsModule { }
