import { Routes } from '@angular/router';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { AboutUsMainComponent } from './modules/about-us-main/about-us-main.component';
import { AdmSchedulingComponent } from './modules/adm-scheduling/adm-scheduling.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RecoveryComponent } from './modules/auth/components/recovery/recovery.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { UserSchedulingComponent } from './modules/user-scheduling/user-scheduling.component';

import { UserRoles } from './core/constantes/user-roles.enum';
import { authGuard } from './core/guards/auth.guard';
import { rolesGuard } from './core/guards/roles.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'about-us-main',
    pathMatch: 'full',
  },
  {
    path: 'about-us-main',
    component: AboutUsMainComponent,
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: 'recovery',
    component: RecoveryComponent,
  },
  // {
  //   path: 'user-scheduling',
  //   component: UserSchedulingComponent,
  //   canActivate: [authGuard, rolesGuard],
  //   data: {
  //     roles: [UserRoles.USER],
  //   },
  // },
  // {
  //   path: 'adm-scheduling',
  //   component: AdmSchedulingComponent,
  //   canActivate: [authGuard, rolesGuard],
  //   data: {
  //     roles: [UserRoles.ADMIN],
  //   },
  // },
  {
    path: 'appointments',
    children: [
      {
        path: 'user-scheduling',
        component: UserSchedulingComponent,
        canActivate: [authGuard, rolesGuard],
        data: {
          roles: [UserRoles.USER],
        },
      },
      {
        path: 'adm-scheduling',
        component: AdmSchedulingComponent,
        canActivate: [authGuard, rolesGuard],
        data: {
          roles: [UserRoles.ADMIN],
        },
      },
    ],
  },
  {
    path: 'aplication',
    loadChildren: () =>
      import('./modules/aplicacao/aplicacao.routes').then(
        (r) => r.ALICATION_ROUTES
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
