/*import { Routes } from "@angular/router";
import { UserRoles } from '../../core/constantes/user-roles.enum';
import { authGuard } from '../../core/guards/auth.guard';
import { rolesGuard } from '../../core/guards/roles.guard';
import { UserHistoryComponent } from "./user/user-history/user-history.component"; 
import { AdmHistoryComponent } from "./adm/adm-history/adm-history.component"; 
import { MedicalRegistrationComponent } from "./adm/medical-registration/medical-registration.component"; 
import { AplicationComponent } from "./aplicacao.component";

export const ALICATION_ROUTES: Routes = [
  {
    path: '',
    component: AplicationComponent,
    canActivate: [authGuard],
  },   
  {
    path: 'user',
    children: [
     { 
      path:'history',
      component: UserHistoryComponent,
      canActivate: [authGuard],
    }
    ]
  },
  {
    path:'adm',
    children:[
      {
        path: 'history',
        component: AdmHistoryComponent,
        canActivate: [authGuard],
      },
      {
        path: 'medical-registration',
        component: MedicalRegistrationComponent,
        canActivate: [authGuard],
      }

    ]
  }
]
*/

