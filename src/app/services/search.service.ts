import { Injectable, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { productType } from '../models/ProductType';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService implements OnInit {
  productsByTitle!:productType[]
  formSearch!:string
  constructor(private req:ProductsService , private router:Router) { }
  ngOnInit(): void {
    this.req.getAllProducts().subscribe({
    next : (value)=> {
      this.productsByTitle = value.filter(product =>
        product.title.toLowerCase().includes(this.formSearch.toLowerCase()));
        console.log(this.productsByTitle);
    },
  })
  }
  category!:string



}
