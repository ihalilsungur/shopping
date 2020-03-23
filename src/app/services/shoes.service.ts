import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Shoes } from "../shoes/shoes";
import { catchError, tap } from "rxjs/operators";
import { throwError, Observable } from "rxjs";

@Injectable()
export class ShoesService {
  constructor(private http: HttpClient) {}
  path = "http://localhost:3000/shoes";
  getShoes(categoryId): Observable<Shoes[]> {
    let newPath = this.path;
    if (categoryId) {
      newPath += "?categoryId=" + categoryId;
    }
    return this.http.get<Shoes[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addShoe(shoe):Observable<Shoes> {
    const headerOpttions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': "Token"
      })
    };
   return this.http.post<Shoes>(this.path, shoe, headerOpttions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = "Bir Hata Oluştu " + err.error.message;
    } else {
      errorMessage = "Bir Sistemsel Hata Oluştu";
    }
    return throwError(errorMessage);
  }
}
