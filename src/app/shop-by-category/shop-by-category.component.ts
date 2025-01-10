import { Component, OnInit } from '@angular/core';
import { CardTemplateComponent } from '../card-template/card-template.component';
import { ProductsService } from '../services/products.service';
import { productType } from '../models/ProductType';
import { SearchComponent } from '../search/search.component';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-shop-by-category',
  standalone: true,
  imports: [CardTemplateComponent],
  templateUrl: './shop-by-category.component.html',
  styleUrl: './shop-by-category.component.css'
})
export class ShopByCategoryComponent implements OnInit {
  constructor(private req:ProductsService , private serach:SearchService){
    this.userChoosenCategory = this.serach.category
  }
  productsByCategory!:productType[]
  userChoosenCategory!:string
  ngOnInit(): void {
    this.req.getAllProducts().subscribe({
      next:(value)=> {
        this.productsByCategory = value.filter(product =>
          product.category.toLowerCase().includes(this.userChoosenCategory.toLowerCase()));
      },
    })
  }

}
