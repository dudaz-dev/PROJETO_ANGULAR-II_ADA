import { Routes } from '@angular/router';
import { AboutUsMainComponent } from './modules/about-us-main/about-us-main.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { RecoveryComponent } from './modules/auth/components/recovery/recovery.component';
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
    path:'**',
    component: NotFoundComponent,
  },

];
