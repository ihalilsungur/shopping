import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from "@angular/common/http"
import { Clothing } from '../clothing/Clothing';
import { tap,catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClothingService {

  constructor(private http:HttpClient) { }
  path="http://localhost:3000/clothing";
  getClothes(categoryId){
    let newPath = this.path;
    if (categoryId) {
      newPath += "?categoryId="+categoryId;
    }
    return this.http.get<Clothing[]>(newPath)
    .pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = "Bir hata oluştu " + err.error.message;
    } else {
      errorMessage = "Sistemsel bir hata oluştu.";
    }
    return throwError(errorMessage);
  }
 
}
