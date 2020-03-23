import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Shoes } from "../shoes/shoes";
import { catchError, tap } from "rxjs/operators";
import { throwError, Observable } from "rxjs";

@Injectable()
export class ShoesService {
  constructor(private http: HttpClient) {}
  path = "http://localhost:3000/shoes";
  getShoes(categoryId):Observable<Shoes[]> {
    let newPath= this.path;
    if(categoryId){
      newPath += "?categoryId="+categoryId;
      console.log("Bize Gelen Path : "+newPath);
    }
    return this.http.get<Shoes[]>(newPath)
    .pipe(
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
