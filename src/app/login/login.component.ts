import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private accountService:AccountService
  ) { }
   loginForm: FormGroup;
   user:User = new User();;
  createProductAddForm() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
     
    });
  }
  ngOnInit(): void {
    this.createProductAddForm();
  }
 
  login(){
    if (this.loginForm.valid) {
       this.user = Object.assign({},this.loginForm.value);
      }
      this.accountService.login(this.user);
      console.log(this.user.username);
      console.log(this.user.password);
    }
    
}
