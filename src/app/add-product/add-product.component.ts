import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  constructor(private productService:ProductsService){}
  addProductToDB(ref:any){
    ref.value.id = ref.value.id.toString()

    if(ref.value){
    this.productService.AddProduct(ref.value)
    }
  }

}
