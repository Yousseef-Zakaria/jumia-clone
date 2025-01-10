import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { UserAuthService } from '../services/user-auth.service';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../services/search.service';
import { productType } from '../models/ProductType';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbDropdownModule,RouterLink , RouterLinkActive, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  productsByTitle!:productType[]
  sendUserSearch(ref:any) {
    this.search.formSearch =ref.value.userSearch
    this.router.navigate([`/search`])
  }
  constructor(private auth:UserAuthService , private search:SearchService , private router: Router,private productsSer:ProductsService , public cart:CartService){}
  isLoged(){
    return this.auth.isLoged()
  }
  email:string|null =localStorage.getItem(`Email`)
  userEamil:string|null= this.email?  this.email.split(`@`)[0]:null


}

