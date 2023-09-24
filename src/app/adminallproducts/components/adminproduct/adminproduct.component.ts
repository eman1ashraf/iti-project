import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { ProductsService } from 'src/app/products/services/products.service';
import { adminallproductsService } from '../../services/adminallproducts.service';

@Component({
  selector: 'app-adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.css']
})
export class AdminproductComponent {
  constructor(private service:adminallproductsService , private build:FormBuilder , private productService:ProductsService ) {
  }
  carts:any[] = [];
  products:any[] = [];
  total = 0
  form!:FormGroup;
  details:any;
isAdded:boolean=false
  categories:string[] = [];
  loading:boolean = false;
  base64:any = '';

  ngOnInit(): void {

    this.form = this.build.group({
      title: ['' , [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category: ['', [Validators.required]]
    })




    this.getAllCarts()


    this.getCategories()
  }



  getAllCarts() {
    this.service.getAllCarts().subscribe((res:any) => {
      this.carts = res
    })
  }



  deleteCart(id:number) {
    this.service.DeleteCart(id).subscribe((res:any) => {
      this.getAllCarts()
      alert("Cart deleted Success")
    })
  }


  view(index:number) {
    this.products = []
    this.details = this.carts[index];
    for(let x in this.details.products) {
      this.productService.getProductById(this.details.products[x].productId).subscribe(res => {
        this.products.push({item: res , quantity:this.details.products[x].quantity})
      })
    }
    console.log(this.details)
  }
  addProduct() {
    const model = this.form.value
    this.service.createProduct(model).subscribe(res => {

      this.isAdded=true
      this.form.reset()

    })


  }
  getImagePath(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
       this.base64 = reader.result;
       this.form.get('image')?.setValue(this.base64)
       console.log(this.base64)
    };

}
getCategories() {
  this.service.getAllCategories().subscribe((res:any) => {
    this.categories = res
   } , error => {
    alert( error)
   })
}
getSelectedCategory(event:any) {
  this.form.get('category')?.setValue(event.target.value)
  console.log(this.form)
}

}
