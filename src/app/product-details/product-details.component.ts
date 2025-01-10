import { Component } from '@angular/core';
import { productType } from '../models/ProductType';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { EGPcurrencyPipe } from '../pipes/egpcurrency.pipe';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [EGPcurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  selectedProduct!:productType | undefined
  constructor(private route:ActivatedRoute , private api:ProductsService, private cart:CartService)
  {
    let id = this.route.snapshot.paramMap.get('id');
    if(id){
    this.api.getProductById(id).subscribe({
      next:(value)=> {
        this.selectedProduct=value
        console.log(value);
      },
    })
    }
  }
  AddtoCart(product:productType){
    this.cart.addProductToCart(product)
  }
  }
