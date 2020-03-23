import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ShoesCategory } from '../shoes/shoes-category/shoes-category';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class ShoesCategoryService {

  constructor(private http:HttpClient) { }
  path="http://localhost:3000/shoes-categories"

  getShoesCategories():Observable<ShoesCategory[]>{
    return this.http.get<ShoesCategory[]>(this.path)
    .pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse){
    let errorMessage=""
    if (err.error instanceof ErrorEvent) {
      errorMessage ="Bir hata oluştu "+ err.error.message ;
    } else {
      errorMessage="Sistemsel bir hata oluştu"
    }
    return throwError(errorMessage);
  }
}
