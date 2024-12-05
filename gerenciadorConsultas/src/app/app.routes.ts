import { Routes } from '@angular/router';
import { AboutUsMainComponent } from './modules/about-us-main/about-us-main.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { RecoveryComponent } from './modules/auth/components/recovery/recovery.component';
import { UserHistoryComponent } from './modules/aplicacao/user/user-history/user-history.component';
import { AdmHistoryComponent } from './modules/aplicacao/adm/adm-history/adm-history.component'; 
import { MedicalRegistrationComponent } from './modules/aplicacao/adm/medical-registration/medical-registration.component'; 
import { AplicacaoComponent } from './modules/aplicacao/aplicacao.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, 
  {
    path: 'about-us-main',
    component: AboutUsMainComponent,
  },
  
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'register',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: AplicacaoComponent,
  },
  {
    path:'recovery',
    component: RecoveryComponent,
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
    path:'aplication',
    children: [
      {
        path: '',
        component: AplicacaoComponent,
      },   
      {
        path: 'user',
        children: [
         { 
          path:'history',
          component: UserHistoryComponent,
        }
        ]
      },
      {
        path:'adm',
        children:[
          {
            path: 'history',
            component: AdmHistoryComponent,
          },
          {
            path: 'medical-registration',
            component: MedicalRegistrationComponent,
          }

        ]
      }
    ]    
  },
  {
    path:'**',
    component: NotFoundComponent,
  },

];
