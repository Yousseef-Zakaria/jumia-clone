import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

export const userAuthinticationGuard: CanActivateFn = (route, state) => {
  let auth = inject(UserAuthService)
  const router = inject(Router);
  if(auth.isLoged())
    return true;
  else
  {
    router.navigate([`sign-in`])
    return false;
  }
};
