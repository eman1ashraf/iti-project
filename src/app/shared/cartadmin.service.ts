import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartadminService {

  constructor() { }

  login(){
    localStorage.setItem("password","123");
  }
logout(){
  localStorage.clear()
}
}
