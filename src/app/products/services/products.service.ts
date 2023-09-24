import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http:HttpClient) { }
  getAllProducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }
  getAllCategories(){
    return this.http.get('https://fakestoreapi.com/products/categories')
  }


  getProductByCategroy(keyword:string){

    return this.http.get('https://fakestoreapi.com/products/category/'+keyword)
  }

  getProductById(id:any){
    return this.http.get('https://fakestoreapi.com/products/'+id)
  }
  
}
