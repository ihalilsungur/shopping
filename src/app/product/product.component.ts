import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
import { AlertifyService } from "../services/alertify.service";
import { ProductService } from './product.service';

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private productService:ProductService
  ) {}
  title = "Ürün Listesi";
  filterText = "";
  products: Product[];
  //bu metod component ilk acildigi zaman yuklenir.
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>{
      this.products =data;
    });
  }
  addToCart(product) {
    this.alertifyService.success(product.name + " Added.");
  }
}
