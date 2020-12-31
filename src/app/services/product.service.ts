import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  //subscribe(data => {this.products = data});

  path = "http://localhost:3000/products";

  getProduct(categoryId: any): Observable<Product[]> {
    //  alert(categoryId);
    let newPath = this.path;

    if (categoryId) {
      newPath += "?categoryId=" + categoryId;
    }



    return this.http.get<Product[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addProduct(product: Product): Observable<Product> {

    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Autorization' : 'Token'
      })
    }

    return this.http.post<Product>(this.path, product,httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Warning' + err.error.message;

    }
    else {
      errorMessage = 'Your system wrong';
    }

    return throwError(errorMessage);

  }





}
