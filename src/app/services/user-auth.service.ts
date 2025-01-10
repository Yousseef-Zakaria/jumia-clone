import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  constructor() { }
  logIn(userEmail:string , userPassword:string){
    localStorage.setItem("Email",`${userEmail}`)
    localStorage.setItem("Password",`${userPassword}`)
  }
  logOut(){
    localStorage.removeItem("Email")
    localStorage.removeItem("Password")
  }
  isLoged(){
    return localStorage.getItem("Email")? true:false;
  }
}
