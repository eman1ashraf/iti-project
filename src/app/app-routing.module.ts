import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductsComponent } from './products/components/allproducts/allproducts.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AdminproductComponent } from './adminallproducts/components/adminproduct/adminproduct.component';

import { LoginComponent } from './login/login.component';
import { cartAdminGuard } from './adminallproducts/cart-admin.guard';




const routes: Routes = [
  {path:"products",component:AllproductsComponent},
  {path:'',redirectTo:'/products',pathMatch:'full'},
  {path:"details/:id",component:ProductDetailsComponent},
  {path:"cart",component:CartComponent},
  {path:"login",component:LoginComponent},

 {path:'adminproduct',component:AdminproductComponent,canActivate:[cartAdminGuard]},
 {path:'**',component:PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
