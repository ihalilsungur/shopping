import { Component, OnInit } from "@angular/core";
import { Product } from "../product";
import { CategoryService } from "src/app/category/category.service";
import { Category } from "src/app/category/category";
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-classic-form",
  templateUrl: "./classic-form.component.html",
  styleUrls: ["./classic-form.component.css"],
  providers: [CategoryService]
})
export class ClassicFormComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}
  model: Product = new Product();

  categories: Category[];
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  add(form:NgForm){
   console.log(form.value.name);
  }
}
