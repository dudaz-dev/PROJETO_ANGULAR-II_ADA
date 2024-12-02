import { Routes } from '@angular/router';
import { AboutUsMainComponent } from './modules/about-us-main/about-us-main.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { RecoveryComponent } from './modules/auth/components/recovery/recovery.component';
import { AplicationComponent } from './modules/aplication/aplication.component';
import { UserHistoryComponent } from './modules/aplication/user/user-history/user-history.component';
import { AdmHistoryComponent } from './modules/aplication/adm/adm-history/adm-history.component';
import { MedicalRegistrationComponent } from './modules/aplication/adm/medical-registration/medical-registration.component';

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
    path:'login',
    component: LoginComponent,
  },
  {
    path:'register',
    component: RegisterComponent,
  },
  {
    path:'recovery',
    component: RecoveryComponent,
  },
  {
    path:'aplication',
    children: [
      {
        path: '',
        component: AplicationComponent,
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
