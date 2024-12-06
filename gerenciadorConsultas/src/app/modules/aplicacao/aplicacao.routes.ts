import { Routes } from '@angular/router';
import { UserRoles } from '../../core/constantes/user-roles.enum';
import { authGuard } from '../../core/guards/auth.guard';
import { rolesGuard } from '../../core/guards/roles.guard';
import { AdmHistoryComponent } from './adm/adm-history/adm-history.component';
import { AplicacaoComponent } from './aplicacao.component';
import { UserHistoryComponent } from './user/user-history/user-history.component';
import { AplicacaoADMComponent } from './adm/aplicacao-adm/aplicacao-adm.component';

export const ALICATION_ROUTES: Routes = [
  {
    path: '',
    component: AplicacaoComponent,
    canActivate: [authGuard, rolesGuard],
    data: {
      roles: [UserRoles.USER],
    },
  },
  {
    path: 'adm',
    component: AplicacaoADMComponent,
    canActivate: [authGuard, rolesGuard],
    data: {
      roles: [UserRoles.ADMIN],
    },
  },
  {
    path: 'user',
    children: [
      {
        path: 'history',
        component: UserHistoryComponent,
        canActivate: [authGuard, rolesGuard],
        data: {
          roles: [UserRoles.USER],
        },
      },
    ],
  },
  {
    path: 'adm',
    children: [
      {
        path: 'history',
        component: AdmHistoryComponent,
        canActivate: [authGuard, rolesGuard],
        data: {
          roles: [UserRoles.ADMIN],
        },
      },
    ],
  },
];
