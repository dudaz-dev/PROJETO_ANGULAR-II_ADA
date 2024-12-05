import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../common/components/footer/footer.component";
import { MenuComponent } from "./components/menu/menu.component";
import { ConsultationsComponent } from "./components/consultations/consultations.component";
import { HeaderComponentPrivate } from '../../common/components/header/header.component';

@Component({
  selector: 'app-aplicacao',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule, // Importando HttpClientModule aqui
    HeaderComponentPrivate,
    FooterComponent,
    MenuComponent,
    ConsultationsComponent,
  ],
  templateUrl: './aplicacao.component.html',
  styleUrls: ['./aplicacao.component.css']
})
export class AplicacaoComponent {}
