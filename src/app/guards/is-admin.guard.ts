import { CanActivateFn } from '@angular/router';

export const isAdminGuard: CanActivateFn = (route, state) => {
  return confirm(`is you are Admin ?`)
};
