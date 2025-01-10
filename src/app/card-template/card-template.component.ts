import { Component, Input } from '@angular/core';
import { productType } from '../models/ProductType';
import { CurrencyPipe, NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../services/cart.service';
import { EGPcurrencyPipe } from '../pipes/egpcurrency.pipe';
import { TemplateRef } from '@angular/core';
import { ToastService } from '../services/toast.service';
import { NgbToast, NgbToastConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastsContainer } from '../toast-container/toast-container.component';
@Component({
  selector: 'app-card-template',
  standalone: true,
  imports: [CurrencyPipe,NgClass , RouterLink , RouterLinkActive,EGPcurrencyPipe , ToastsContainer , NgbToast],
  templateUrl: './card-template.component.html',
  styleUrl: './card-template.component.css'
})
export class CardTemplateComponent {
  constructor(private cart:CartService, private toastService:ToastService){}
  @Input()globalProduct!:productType
  isEnterd:boolean=false
  addedTo:boolean = false
  addToCart(product:productType)
  {
    this.cart.addProductToCart(product)
    this.addedTo = true
  }
  showSuccess(template: TemplateRef<any>) {
		this.toastService.show({ template, classname: 'bg-success text-light z-3', delay: 10000 });
	}
}
