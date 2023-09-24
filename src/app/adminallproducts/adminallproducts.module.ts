import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminproductComponent } from './components/adminproduct/adminproduct.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AdminproductComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule

  ]
})
export class AdminallproductsModule { }
