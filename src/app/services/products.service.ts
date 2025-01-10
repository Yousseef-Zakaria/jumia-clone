import { Injectable, OnInit } from '@angular/core';
import { productType } from '../models/ProductType';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http:HttpClient){}
  private apiUrl = 'http://localhost:3000/electronics';
  getAllProducts(): Observable<productType[]>
  {
    return this.http.get<productType[]>(`http://localhost:3000/electronics`);
  }
  getProductById(id:string):Observable<productType>{
    return this.http.get<productType>(`http://localhost:3000/electronics/${id}`)
  }
  AddProduct(product:productType){
    this.http.post(`http://localhost:3000/electronics`, product).subscribe({
      next(value) {
        
      },
    })
  }
}
