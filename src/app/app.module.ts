import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//inputlari kullanmak icin {FormsModule} ekliyoruz
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { HomepageComponent } from './homepage/homepage.component';
import { ClothingComponent } from './clothing/clothing.component';
import { ShoesComponent } from './shoes/shoes.component';
import { SportComponent } from './sport/sport.component';
import { BooksComponent } from './books/books.component';
import { GemClockComponent } from './gem-clock/gem-clock.component';
import { ClothingCategoryComponent } from './clothing-category/clothing-category.component';
import { ProductAddFormsComponent } from './product/product-add-forms/product-add-forms.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    HomepageComponent,
    ClothingComponent,
    ShoesComponent,
    SportComponent,
    BooksComponent,
    GemClockComponent,
    ClothingCategoryComponent,
    ProductAddFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
