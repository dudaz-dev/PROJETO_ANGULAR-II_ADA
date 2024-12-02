import { Component } from '@angular/core';
import { HeaderComponent } from "../about-us-main/components/headerAbout/header.component";
import { FooterComponent } from "../../common/components/footer/footer.component";
import { MenuComponent } from "./components/menu/menu.component";
import { ConsultationsComponent } from "./components/consultations/consultations.component";

@Component({
  selector: 'app-aplicacao',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MenuComponent, ConsultationsComponent],
  templateUrl: './aplicacao.component.html',
  styleUrl: './aplicacao.component.css'
})
export class AplicacaoComponent {

}
