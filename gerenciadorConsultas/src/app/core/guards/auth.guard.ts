import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { SecurityService } from '../services/security.service';

export const authGuard: CanActivateFn = (activatedRoute, state) => {
  const securityService = inject(SecurityService);
  const router = inject(Router);
  return securityService.checkAuthStatus().pipe(
    map((isLoggedIn) => {
      if (isLoggedIn) {
        return true;
      }

      console.log(
        'Usuário não tem privilégios suficientes para acessar a página.'
      );
      
      router.navigate(['/auth/login']);
      return false;
    })
  );
};