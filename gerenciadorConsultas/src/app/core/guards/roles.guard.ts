import { inject } from '@angular/core';
import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';
import { map } from 'rxjs';
import { SecurityService } from '../services/security.service';

export const rolesGuard: CanActivateFn = (activatedRoute, state) => {
  return inject(SecurityService)
    .checkUserRoles()
    .pipe(
      map((role) => {
        const userCanDo = activatedRoute.data['roles'].includes(role);
        return userCanDo
          ? true
          : createUrlTreeFromSnapshot(activatedRoute, ['/', 'auth', 'login']);
      })
    );
};
