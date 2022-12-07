import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getUserData(): Observable<any> {
    return this.http.get('https://dummyjson.com/products');
  }
  getAllCategories(): Observable<any> {
    return this.http.get('https://dummyjson.com/products/categories');
  }
  getProcutofCategory(category:string): Observable<any> {
    return this.http.get(`https://dummyjson.com/products/category/${category}`);
  }
  getProductsPagination(limit:number,skip:number): Observable<any> {
    return this.http.get(`https://dummyjson.com/products?limit=${limit}&${skip}=10&select=title,price`);
  }
}
