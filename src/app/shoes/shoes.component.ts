import { Component, OnInit } from "@angular/core";
import { Shoes } from "./shoes";
import { ShoesService } from "../services/shoes.service";
import { AlertifyService } from "../services/alertify.service";
import { ActivatedRoute } from "@angular/router";
import { AccountService } from '../services/account.service';

@Component({
  selector: "app-shoes",
  templateUrl: "./shoes.component.html",
  styleUrls: ["./shoes.component.css"],
  providers: [ShoesService]
})
export class ShoesComponent implements OnInit {
  constructor(
    private shoesService: ShoesService,
    private alertifyService: AlertifyService,
    private activatedRoute: ActivatedRoute,
    private accountService:AccountService
  ) {}
  shoes: Shoes[];
  filterText = "";
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.shoesService.getShoes(params["categoryId"])
      .subscribe(data => {
        this.shoes = data;
      });
    });
  }

  addToCart(shoe) {
    this.alertifyService.success(shoe.name + " Ürünü Sepete Eklendi ");
  }

  accessControl(){
    let isLoggin = this.accountService.isLoggedIn();
    if(isLoggin){
      return true;
    }
    return false;
   }
}
