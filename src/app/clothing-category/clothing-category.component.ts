import { Component, OnInit } from '@angular/core';
import { ClothingCategory } from './clothing-category';
import {ClothingCategoryService} from "../services/clothing-category.service";

@Component({
  selector: 'app-clothing-category',
  templateUrl: './clothing-category.component.html',
  styleUrls: ['./clothing-category.component.css'],
  providers:[ClothingCategoryService]
})
export class ClothingCategoryComponent implements OnInit {

  constructor(private clothingCategoryService : ClothingCategoryService) { }
  clothingCategories:ClothingCategory[];
  ngOnInit(): void {
  this.clothingCategoryService.getClothingCategories()
  .subscribe(data=>{
    this.clothingCategories = data;
  });
  }

}
