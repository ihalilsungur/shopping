import { Component } from '@angular/core';
import { Product } from './product/product';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(
     private accountService:AccountService
   ){}
  isLoggedin(){
    return this.accountService.isLoggedIn();
  }

  logOut(){
    this.accountService.logOut();
  }
}
