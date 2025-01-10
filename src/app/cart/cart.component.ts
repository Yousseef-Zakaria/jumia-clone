import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '../services/cart.service';
import { productType } from '../models/ProductType';
import { CurrencyPipe, NgClass } from '@angular/common';
import { EGPcurrencyPipe } from '../pipes/egpcurrency.pipe';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [EGPcurrencyPipe , NgClass , NgbToast],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  decreaseQuant(product:productType) {
    this.cart.updateProductQuantity(product.id , -1)
    this.calculateTotalPrice();
  }
  increaseQuant(product:productType) {
    this.cart.updateProductQuantity(product.id , 1)
    this.calculateTotalPrice();
  }

  constructor(public cart:CartService){}
  ngOnInit(): void {
    this.calculateTotalPrice();
  }


clicked:boolean = false
removeItem(product:productType){
  this.clicked = true
  this.calculateTotalPrice();
  setTimeout(() => {
    this.clicked = false
  }, 1000);
}
  totalPrice!:number
calculateTotalPrice() {
  const cart = this.cart.getCartProducts();
  this.totalPrice = cart.reduce((total, product) => total + (product.price * product.count), 0);
}
}
