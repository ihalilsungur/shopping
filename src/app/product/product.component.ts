import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
import { AlertifyService } from "../services/alertify.service";
import { ProductService } from "../services/product.service";
import { ActivatedRoute } from "@angular/router";
import { AccountService } from '../services/account.service';

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private accountService:AccountService
  ) {}
  title = "Ürün Listesi";
  filterText = "";
  products: Product[];
  //bu metod component ilk acildigi zaman yuklenir.
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getProducts(params["categoryId"]).subscribe(data => {
        this.products = data;
      });
    });
  }
  addToCart(product) {
    this.alertifyService.success(product.name + " Added.");
  }

  accessControl(){
   let isLoggin = this.accountService.isLoggedIn();
   if(isLoggin){
     return true;
   }
   return false;
  }
}
