import { Component } from '@angular/core';
import { CartadminService } from '../shared/cartadmin.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isSubmitted:boolean=false;
  constructor( public _CartadminService :CartadminService){}
  save(){
    this._CartadminService.login()
  }
  form!: FormGroup;

  ngOnInit(): void {
    // create a form group instance and bind the value from local storage to the form controls
    this.form = new FormGroup({
      email: new FormControl(localStorage.getItem('email')),
      password: new FormControl(localStorage.getItem('password')),
    });
  }

  onSubmit(): void {
    // store the form data in local storage on submit
    localStorage.setItem('email', this.form.value.email);
    localStorage.setItem('password', this.form.value.password);
    // do something with the form data
    this.form.reset();
    this.isSubmitted=true;
  }


}
