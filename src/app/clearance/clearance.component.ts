import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { productType } from '../models/ProductType';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CardTemplateComponent } from "../card-template/card-template.component";
import { EGPcurrencyPipe } from '../pipes/egpcurrency.pipe';
import { SearchService } from '../services/search.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-clearance',
  standalone: true,
  imports: [CurrencyPipe, CardTemplateComponent,EGPcurrencyPipe ,RouterLink],
  templateUrl: './clearance.component.html',
  styleUrl: './clearance.component.css'
})
export class ClearanceComponent implements OnInit  {
  products!:productType[]
  topPicks!:productType[]
  constructor(private req:ProductsService , private search:SearchService){}
  ngOnInit(): void {
    this.req.getAllProducts().subscribe({
      next:(value)=> {
        this.products=value
        this.topPicks = this.products.slice(0,6)
      },
    })
  }
  categoryPhones(){
    this.search.category = "mobile"
  }
  categoryAudio(){
    this.search.category = "audio"
  }
  categoryGaming(){
    this.search.category = "gaming"
  }

}
