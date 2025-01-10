import { Component, OnInit } from '@angular/core';
import { CardTemplateComponent } from '../card-template/card-template.component';
import { ProductsService } from '../services/products.service';
import { SearchService } from '../services/search.service';
import { productType } from '../models/ProductType';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CardTemplateComponent,HeaderComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  userSearch!:string
  constructor(private req:ProductsService , private search:SearchService){

  }


  productsInSearch!:productType[]
  ngOnInit(): void {
    this.userSearch = this.search.formSearch
    this.req.getAllProducts().subscribe({
    next : (value)=> {
      this.productsInSearch = value.filter(product =>
        product.title.toLowerCase().includes(this.userSearch.toLowerCase()));
    },
  })
  }

}
