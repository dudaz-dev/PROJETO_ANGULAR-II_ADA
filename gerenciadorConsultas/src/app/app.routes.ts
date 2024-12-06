import { Routes } from '@angular/router';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { AboutUsMainComponent } from './modules/about-us-main/about-us-main.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RecoveryComponent } from './modules/auth/components/recovery/recovery.component';
import { UserSchedulingComponent } from './modules/user-scheduling/user-scheduling.component';
import { AdmSchedulingComponent } from './modules/adm-scheduling/adm-scheduling.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';

import { AplicacaoADMComponent } from './modules/aplicacao/adm/aplicacao-adm/aplicacao-adm.component';
import { AplicacaoComponent } from './modules/aplicacao/aplicacao.component';

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
  {
    path: 'user-scheduling',
    component: UserSchedulingComponent,
  },
  {
    path: 'adm-scheduling',
    component: AdmSchedulingComponent,
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
  }
];

