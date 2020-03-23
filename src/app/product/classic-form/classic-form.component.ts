import { Component, OnInit } from "@angular/core";
import { Product } from "../product";
import { CategoryService } from "src/app/category/category.service";
import { Category } from "src/app/category/category";
import { NgForm } from "@angular/forms";
import { ProductService } from "../product.service";
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: "app-classic-form",
  templateUrl: "./classic-form.component.html",
  styleUrls: ["./classic-form.component.css"],
  providers: [CategoryService, ProductService]
})
export class ClassicFormComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private alertifyService :AlertifyService
      ) {}
  model: Product = new Product();

  categories: Category[];
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  add(form: NgForm) {
    this.productService.addProduct(this.model)
    .subscribe(data => {
      this.alertifyService.success(data.name +  " başarılı bir şekilde eklendi.");
    });
  }
}
