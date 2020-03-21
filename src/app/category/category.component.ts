import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private http : HttpClient) { }
  title="Kategori Listesi"
  categories :Category[];
  ngOnInit(): void {
    this.http.get<Category[]>("http://localhost:3000/categories")
    .subscribe(data=>{
      this.categories = data;
    })
  }

}
