import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HeaderADMComponent } from '../../../../common/components/header-adm/header-adm.component'; 
import { FooterComponent } from '../../../../common/components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonConfig, MatButtonModule } from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-adm-history',
  standalone: true,
  imports: [CommonModule,MatToolbarModule, MatIconModule, MatButtonModule,HeaderADMComponent,FooterComponent, MatButton,MatCardModule,],
  templateUrl: './adm-history.component.html',
  styleUrl: './adm-history.component.css'
})
export class AdmHistoryComponent {
  cardsAdm = [
    {
      title: 'Consulta',
      subtitle: 'Paciente João',
      info: 'Hospital Ponta Negra',
      address: 'Av. Ayrton Senna, 34 - Capim Macio',
      date: 'Seg., 25 de dez. de 2024',
      time: '11:30 h',
    },
  ];

  addCard() {
    this.cardsAdm.push({
      title: 'Novo Card',
      subtitle: 'Informação Adicional',
      info: 'Novo Local',
      address: 'Endereço Adicional',
      date: 'Data',
      time: 'Hora',
    });
  }

}
