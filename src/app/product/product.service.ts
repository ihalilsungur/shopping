import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable()
//Bu global bir servis olmadigi icin providedIn yorum satirina aldim.
//{providedIn: 'root'}
export class ProductService {
  constructor(private http : HttpClient) {}
  path="http://localhost:3000/products";

  getProducts():Observable<Product[]> {
   return  this.http.get<Product[]>(this.path);
  }
}
