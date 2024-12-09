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
    MatCardModule,
  ],
  templateUrl: './adm-history.component.html',
  styleUrls: ['./adm-history.component.css']
})
export class AdmHistoryComponent implements OnInit {
  cardsAdm: History[] = []; // Dados recebidos da API
  isLoading = true;      // Para indicar carregamento
  errorMessage = '';

  constructor(private historyService: HistoryServiceService) {}

  ngOnInit(): void {
    this.loadAppointments();
  }

// Método para carregar os compromissos da API
loadAppointments(): void {
  this.historyService.getAppointments().subscribe({
    next: (data) => {
      // Filtra compromissos com status DONE ou CANCELED
      this.cardsAdm = data.filter(
        (appt) => appt.status === 'DONE' || appt.status === 'CANCELED'
      ); 
      this.isLoading = false;
    },
    error: (err) => {
      this.errorMessage = 'Não possui histórico de consultas.';
      this.isLoading = false;
      console.error(err);
    },
  });
}
  // Método para marcar um compromisso como concluído
  markAsDone(id: string, token: string): void {
    this.historyService.markAsDone(id, token).subscribe({
      next: (updatedAppointment) => {
        // Atualiza o compromisso marcado como concluído na lista local
        const updatedAppointments = this.cardsAdm.map((appointment) =>
          appointment.id === updatedAppointment.id ? updatedAppointment : appointment
        );
        this.cardsAdm = updatedAppointments;
      },
      error: (err) => {
        console.error('Erro ao marcar como concluído:', err);
      },
    });
  }
}

