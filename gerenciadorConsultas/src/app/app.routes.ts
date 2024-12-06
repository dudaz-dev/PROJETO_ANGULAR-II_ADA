import { Routes } from '@angular/router';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { AboutUsMainComponent } from './modules/about-us-main/about-us-main.component';
import { AdmHistoryComponent } from './modules/aplicacao/adm/adm-history/adm-history.component';
import { UserHistoryComponent } from './modules/aplicacao/user/user-history/user-history.component';
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
  // {
  //   path:'login',
  //   component: LoginComponent,
  // },
  // {
  //   path:'register',
  //   component: RegisterComponent,
  // },
  {
    path: 'dashboard',
    component: AplicacaoComponent,
  },
  {
    path: 'dashboardAdm',
    component: AplicacaoADMComponent,
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
    /* MOLDE ÁPOS ALTENTICAÇÃO DE LOGIN SER UTILIZADA:
    {
    path: 'aplication',
    loadChildren: () =>
      import('./modules/aplicacao/aplicacao.routes').then(
        (r) => r.ALICATION_ROUTES
      ),
  },  
    
  */
    path: 'aplication',
    children: [
      {
        path: '',
        component: AplicacaoComponent,
      },
      {
        path: 'user',
        children: [
          {
            path: 'history',
            component: UserHistoryComponent,
          },
        ],
      },
      {
        path: 'adm',
        children: [
          {
            path: 'history',
            component: AdmHistoryComponent,
          },
        ],
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

