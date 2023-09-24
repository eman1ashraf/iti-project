import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminallproductsModule } from './adminallproducts/adminallproducts.module';
import { LoginComponent } from './login/login.component';








@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    CartsModule,
    FormsModule,
    AdminallproductsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
