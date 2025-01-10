import { Injectable, OnDestroy } from '@angular/core';
import { productType } from '../models/ProductType';

@Injectable({
  providedIn: 'root'
})
export class CartService   {
  private cartKey = 'cart'
  cart:productType[]=[]

  constructor() {
    const storedCart = localStorage.getItem(this.cartKey);
    this.cart = storedCart ? JSON.parse(storedCart) : []; // Load the cart from localStorage when the service is initialized
  }

  totalPrice : number = 0
    // Function to get all products in the cart
    getCartProducts() {
      return this.cart;
    }

  addProductToCart(product:productType){
    // this.cart.push(product)
    // this.totalPrice += product.price
    // this.saveCartToLocalStorage()

      const item = this.cart.find(p => p.id === product.id);
      if (item) {
        item.count += 1; // Increase quantity if item already exists
      } else {
        this.cart.push({ ...product, count: 1 }); // Add product with quantity 1 if it doesn't exist
      }
      this.saveCartToLocalStorage();

  }
    // Save cart to localStorage
  private saveCartToLocalStorage() {
    localStorage.setItem(this.cartKey, JSON.stringify(this.cart));

  }
  updateProductQuantity(productId: string, change: number) {
    const item = this.cart.find(p => p.id == productId);
    if (item) {
      item.count += change;
      if (item.count <= 0) {
        this.removeProductFromCart(item); // Remove item if quantity is 0 or less
      }
      this.saveCartToLocalStorage();
    }
  }

  removeProductFromCart(product:productType)
  {
    this.cart = this.cart.filter( (item) => item != product)
    this.saveCartToLocalStorage();
  }
  clearCart() {
    this.cart = [];
    localStorage.removeItem(this.cartKey);
  }
}
