import { Component, OnInit } from '@angular/core';
import { ShoesCategoryService } from 'src/app/services/shoes-category.service';
import { ShoesCategory } from './shoes-category';

@Component({
  selector: 'app-shoes-category',
  templateUrl: './shoes-category.component.html',
  styleUrls: ['./shoes-category.component.css'],
  providers:[ShoesCategoryService]
})
export class ShoesCategoryComponent implements OnInit {

  constructor(
    private shoesCategoryService:ShoesCategoryService
    ) { }
  shoesCategories:ShoesCategory[];
  ngOnInit(): void {
    this.shoesCategoryService.getShoesCategories()
    .subscribe(data=>{
      this.shoesCategories=data;
    });
  }

}
