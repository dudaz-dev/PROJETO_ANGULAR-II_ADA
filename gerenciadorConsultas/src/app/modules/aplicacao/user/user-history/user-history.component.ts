import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HeaderComponent } from '../../../../common/components/header/header.component';
import { FooterComponent } from '../../../../common/components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user-history',
  standalone: true,
  imports: [
    CommonModule, 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HeaderComponent,
    FooterComponent,
    MatCardModule,
  ],
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css'],
})
export class UserHistoryComponent {
  cards = [
    {
      title: 'Consulta',
      subtitle: 'Dr(a). Ana Maria Braga',
      info: 'Hospital Ponta Negra',
      address: 'Av. Ayrton Senna, 34 - Capim Macio',
      date: 'Seg., 25 de dez. de 2024',
      time: '11:30 h',
    },
  ];

  addCard() {
    this.cards.push({
      title: 'Novo Card',
      subtitle: 'Informação Adicional',
      info: 'Novo Local',
      address: 'Endereço Adicional',
      date: 'Data',
      time: 'Hora',
    });
  }
}