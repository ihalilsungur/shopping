import { Component, OnInit } from "@angular/core";
import { Shoes } from "../shoes";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ShoesCategory } from '../shoes-category/shoes-category';
import { CategoryService } from 'src/app/services/category.service';
import { ShoesService } from 'src/app/services/shoes.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ShoesCategoryService } from 'src/app/services/shoes-category.service';

@Component({
  selector: "app-shoe-add-forms",
  templateUrl: "./shoe-add-forms.component.html",
  styleUrls: ["./shoe-add-forms.component.css"],
  providers:[ShoesCategoryService,ShoesService]
})
export class ShoeAddFormsComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private shoesCategoryService:ShoesCategoryService,
    private shoesService:ShoesService,
    private alertifyService:AlertifyService
    ) {}
  shoe: Shoes = new Shoes();
  shoesCategories:ShoesCategory[];
  productAddForm: FormGroup;
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
    this.shoesCategoryService.getShoesCategories()
    .subscribe(data=>{
      this.shoesCategories = data;
    });
  }

  addShoe(){
    if (this.productAddForm.valid) {
      this.shoe = Object.assign({}, this.productAddForm.value);
    }
   this.shoesService.addShoe(this.shoe)
   .subscribe(data=>{
     this.alertifyService.success(data.name +" Başarılı Olarak Eklendi.");
   });
  }
}
