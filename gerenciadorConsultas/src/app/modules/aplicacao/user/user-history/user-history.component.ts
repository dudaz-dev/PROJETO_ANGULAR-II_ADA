import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HeaderComponentPrivate } from '../../../../common/components/header/header.component';
import { FooterComponent } from '../../../../common/components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HistoryServiceService } from '../../../auth/services/history.service.service'; 
import { History } from '../../../auth/models/history.model'; 

@Component({
  selector: 'app-user-history',
  standalone: true,
  imports: [
    CommonModule, 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HeaderComponentPrivate,
    FooterComponent,
    MatCardModule,
  ],
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css'],
})
export class UserHistoryComponent {

  cards: History[] = []; 
  isLoading = true;      
  errorMessage = '';

  constructor(private historyService: HistoryServiceService) {}

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.historyService.getAppointments().subscribe({
      next: (data) => {
        this.cards = data;
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