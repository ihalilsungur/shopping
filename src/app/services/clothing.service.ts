import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Clothing } from "../clothing/Clothing";
import { tap, catchError } from "rxjs/operators";
import { throwError, Observable } from "rxjs";


@Injectable()
export class ClothingService {
  constructor(private http: HttpClient) {}
  path = "http://localhost:3000/clothing";
  getClothes(categoryId):Observable<Clothing[]> {
    let newPath = this.path;
    if (categoryId) {
      newPath += "?categoryId=" + categoryId;
    }
    return this.http.get<Clothing[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addProduct(clothing:Clothing):Observable<Clothing> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': "Token"
      })
    };
    return this.http.post<Clothing>(this.path, clothing, httpOptions)
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
