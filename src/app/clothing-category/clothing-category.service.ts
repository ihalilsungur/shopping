import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ClothingCategory } from './clothing-category';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class ClothingCategoryService {
  constructor(private http: HttpClient) {}
  path = "http://localhost:3000/clothing-categories";
  getClothingCategories() {
    return this.http.get<ClothingCategory[]>(this.path)
    .pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
  }
  handleError(err: HttpErrorResponse){
   let errorMessage=""
   if(err.error instanceof ErrorEvent){
     errorMessage = "Bir hata oluştu "+err.error.message
   }else{
     errorMessage="Sistemde Bir hata oluştu."
   }
   return throwError(errorMessage);
  }
}
