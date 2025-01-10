import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  isUserLogeed:boolean
  constructor(private userAuth:UserAuthService){
    this.isUserLogeed=this.userAuth.isLoged()
  }
  logInSubmit(ref:any){
    if(ref.value){
      this.userAuth.logIn(ref.value.Email,ref.value.Password)
      window.location.reload();
    }
  }

  userEamil:string|null =localStorage.getItem(`Email`)
  logOut(){
    this.userAuth.logOut()
    window.location.reload();
  }


}
