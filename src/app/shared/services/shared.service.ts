import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  logout(){
    localStorage.removeItem("token")
  }
  }


