import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Clothing } from "../Clothing";
import { ClothingCategory } from "src/app/clothing-category/clothing-category";
import { ClothingCategoryService } from "src/app/services/clothing-category.service";
import { ClothingService } from "src/app/services/clothing.service";
import { Observable } from "rxjs";
import { AlertifyService } from "src/app/services/alertify.service";

@Component({
  selector: "app-clothing-add-forms",
  templateUrl: "./clothing-add-forms.component.html",
  styleUrls: ["./clothing-add-forms.component.css"],
  providers: [ClothingService, ClothingCategoryService]
})
export class ClothingAddFormsComponent implements OnInit {
  productAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private clothingCategoryService: ClothingCategoryService,
    private clothingService: ClothingService,
    private alertiyfService: AlertifyService
  ) {}
  clothing: Clothing = new Clothing();
  clothingCategories: ClothingCategory[];
  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      price: ["", Validators.required],
      categoryId: ["", Validators.required],
      description: ["", Validators.required],
      imageUrl: ["", Validators.required]
    });
  }
  ngOnInit(): void {
    this.createProductAddForm();
    this.clothingCategoryService.getClothingCategories().subscribe(data => {
      this.clothingCategories = data;
    });
  }
  addProduct() {
    if (this.productAddForm.valid) {
      this.clothing = Object.assign({}, this.productAddForm.value);
    }
    this.clothingService.addProduct(this.clothing).subscribe(data => {
      this.alertiyfService.success(data.name + "  Başarılı Olarak Eklendi.");
    });
  }
}
