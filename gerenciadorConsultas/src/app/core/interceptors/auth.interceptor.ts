import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  if (req.url.includes('/auth')) {
    return next(req);
  }

  const token = sessionStorage.getItem('USER_TOKEN');
  const newReq = req.clone({
    setHeaders: {
      Authorization: 'Bearer ' + token,
    },
  });

  return next(newReq).pipe(
    catchError((err: unknown) => {
      if (err instanceof HttpErrorResponse) {

      }

      return throwError(() => err);
    })
  );
};
