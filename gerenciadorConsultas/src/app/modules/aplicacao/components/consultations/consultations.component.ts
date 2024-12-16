import { Component, OnInit, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { ConsultasService } from '../../services/consultas.service';
import { Appointments } from '../../model/appointments.model';

@Component({
  selector: 'app-consultations',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.css'],
})
export class ConsultationsComponent implements OnInit {
  appointmentsData$: Observable<Appointments[]> | undefined; 
appointment: any;

  constructor(
    private consultasService: ConsultasService,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {    
    this.appointmentsData$ = this.consultasService.listaConsultas$;
  }
}