import { Component, OnInit } from '@angular/core';
import { Clothing } from './Clothing';
import { ClothingService} from "../services/clothing.service";
import { ActivatedRoute } from "@angular/router";
import { AlertifyService } from "../services/alertify.service";
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css'],
  providers:[ClothingService]
})
export class ClothingComponent implements OnInit {

  constructor(
    private clothingService :ClothingService,
    private activatedRoute: ActivatedRoute,
    private alertifyService:AlertifyService,
    private accountService:AccountService
    ) { }
  clothes:Clothing[];
  filterText=""
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.clothingService.getClothes(params["categoryId"])
      .subscribe(data=>{
        this.clothes=data;
      });
    });
   
  }
 
  addToClothingCart(clothing){
    this.alertifyService.success(clothing.name + " Added.");
  }

  accessControl(){
    let isLoggin = this.accountService.isLoggedIn();
    if(isLoggin){
      return true;
    }
    return false;
   }
  
}

