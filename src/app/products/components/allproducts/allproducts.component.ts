import { Component, OnInit  } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { product } from '../../models/product';


@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit{
  products:product[]=[];
  CategoriesArr:string[]=[];
  loading:boolean=false;
  cartProduct:any[]=[]
  constructor(public service:ProductsService){}
  ngOnInit():void{
    this.getProducts()
    this.getCategeries()

  }
  getProducts(){
    this.loading=true
    this.service.getAllProducts().subscribe((res:any) =>{
     this.products=res
     this.loading=false
    }, error =>{
      this.loading=false
      alert(error)
    })



    }






    getCategeries(){
      this.loading=true
      this.service.getAllCategories().subscribe((res:any) =>{
       this.CategoriesArr=res
       this.loading=false
      }, error =>{
        this.loading=false
        alert(error)
      })



      }

      filterCategory(event:any){
        let value=event.target.value;
        //shorten conditon
         (value=="All") ?this.getProducts(): this.getproductsCategory(value)
            }
      getproductsCategory(keyword:string){
        this.loading=true
        this.service.getProductByCategroy(keyword).subscribe((res:any) => {
          this.products=res
          this.loading=false

        })
      }
      addToCart(event:any){
        if ("cart" in localStorage){
          this.cartProduct=JSON.parse(localStorage.getItem("cart")!)
          let exsit = this.cartProduct.find(item => item.item.id==event.item.id)
          if (exsit){
            alert("product is already in your cart")
          }
          else{
            this.cartProduct.push(event)
            localStorage.setItem("cart",JSON.stringify(this.cartProduct))
          }

        }
        else{
          this.cartProduct.push(event)
          localStorage.setItem("cart",JSON.stringify(this.cartProduct))

        }

      }




}
