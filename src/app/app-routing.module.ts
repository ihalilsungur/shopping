import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { ClothingComponent } from './clothing/clothing.component';
import { ShoesComponent } from './shoes/shoes.component';
import { GemClockComponent } from './gem-clock/gem-clock.component';
import { SportComponent } from './sport/sport.component';
import { BooksComponent } from './books/books.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ClothingCategoryComponent } from './clothing-category/clothing-category.component';
import { ProductAddFormsComponent } from './product/product-add-forms/product-add-forms.component';
import { ClothingAddFormsComponent } from './clothing/clothing-add-forms/clothing-add-forms.component';


const routes: Routes = [
  {path:"products",component:ProductComponent},
  {path:"",redirectTo:"products",pathMatch:'full'},
  {path:"categories",component:CategoryComponent},
  {path:"products/category/:categoryId",component:ProductComponent},
  {path:"homepage",component:HomepageComponent},
  {path:"clothes",component:ClothingComponent},
  {path:"shoes",component:ShoesComponent},
  {path:"gem-clock",component:GemClockComponent},
  {path:"sport",component:SportComponent},
  {path:"books",component:BooksComponent},
  {path:"clothes/clothing-categories/:categoryId",component:ClothingComponent},
  {path:"clothing-categories",component:ClothingCategoryComponent},
  {path:"product-add",component:ProductAddFormsComponent},
  {path:"clothing-add",component:ClothingAddFormsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
