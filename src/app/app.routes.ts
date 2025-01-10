import { Routes } from '@angular/router';
import { ClearanceComponent } from './clearance/clearance.component';
import { TopGenderComponent } from './top-gender/top-gender.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CartComponent } from './cart/cart.component';
import { userAuthinticationGuard } from './guards/user-authintication.guard';
import { SearchComponent } from './search/search.component';
import { ShopByCategoryComponent } from './shop-by-category/shop-by-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { isAdminGuard } from './guards/is-admin.guard';

export const routes: Routes = [
  {
    path:"",
    component: ClearanceComponent,
    title:"Jumia Clone"
  },
  {
    path:'product-details/:id',
    component: ProductDetailsComponent,
    title:'details'
  },
  {
    path:'sign-in',
    component: SignInComponent,
    title:'sign in'
  },
  {
    path:'cart',
    component: CartComponent,
    title:'Cart',
    canActivate:[userAuthinticationGuard]
  },
  {
    path:'search',
    component: SearchComponent,
    title:'Search',
  },
  {
    path:'category',
    component: ShopByCategoryComponent,
    title:'Category',
  },
  {
    path:'add-product',
    component: AddProductComponent,
    title:'Add Product By Admin',
    canActivate:[isAdminGuard]
  }
];
