import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../category/category';
import { Observable, throwError } from 'rxjs';
import {tap,catchError} from 'rxjs/operators';
import { AlertifyService } from '../services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

//subscribe(data => {this.products = data});

  path = "http://localhost:3000/categories";
  
  getCategory():Observable<Category[]>{
   return this.http.get<Category[]>(this.path).pipe(
     tap(data=>console.log(JSON.stringify(data))),
     catchError(this.handleError)
   );
  }

  handleError(err: HttpErrorResponse){
    let errorMessage=''
    if(err.error instanceof ErrorEvent ){
      errorMessage = 'Warning' + err.error.message;
      
    }
    else{
      errorMessage='Your system wrong';
    }

    return throwError(errorMessage);

  }





}
