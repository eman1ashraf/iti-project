import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  id:any
  data:any=[];
  loading:boolean=false
  constructor(public route:ActivatedRoute, public service:ProductsService){
    this.id=this.route.snapshot.paramMap.get("id")


   }
   ngOnInit():void{
    this.getProduct()
   }
  getProduct(){
    this.loading=true
    this.service.getProductById(this.id).subscribe(res =>{
      this.loading=false
      this.data=res

    },error =>{
      this.loading=false
      alert(error)

    }
    )

  }


}
