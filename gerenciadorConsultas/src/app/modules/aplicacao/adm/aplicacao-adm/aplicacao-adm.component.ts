import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { ConsultationsComponent } from "../../components/consultations/consultations.component";
import { FooterComponent } from "../../../../common/components/footer/footer.component";
import { HeaderADMComponent } from '../../../../common/components/header-adm/header-adm.component';

@Component({
  selector: 'app-aplicacao-adm',
  standalone: true,
  imports: [
    MenuComponent,
    ConsultationsComponent, 
    FooterComponent,
    HeaderADMComponent
  ],
  templateUrl: './aplicacao-adm.component.html',
  styleUrl: './aplicacao-adm.component.css'
})
export class AplicacaoADMComponent {

}
