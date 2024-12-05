import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HeaderADMComponent } from '../../../../common/components/header-adm/header-adm.component'; 
import { FooterComponent } from '../../../../common/components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HistoryServiceService } from '../../../auth/services/history.service.service'; 
import { History } from '../../../auth/models/history.model'; 

@Component({
  selector: 'app-adm-history',
  standalone: true,
  imports: [
    CommonModule, 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HeaderADMComponent,
    FooterComponent,
    MatCardModule,],
  templateUrl: './adm-history.component.html',
  styleUrl: './adm-history.component.css'
})
export class AdmHistoryComponent {
 /* cardsAdm = [
    {
      title: 'Consulta',
      subtitle: 'Paciente João',
      info: 'Hospital Ponta Negra',
      address: 'Av. Ayrton Senna, 34 - Capim Macio',
      date: 'Seg., 25 de dez. de 2024',
      time: '11:30 h',
    },
  ];*/
  cardsAdm: History[] = []; // Dados recebidos da API
  isLoading = true;      // Para indicar carregamento
  errorMessage = '';

  constructor(private historyService: HistoryServiceService) {}

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.historyService.getAppointments().subscribe({
      next: (data) => {
        this.cardsAdm = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Não possui histórico de consultas.';
        this.isLoading = false;
        console.error(err);
      },
    });
  } 

}
