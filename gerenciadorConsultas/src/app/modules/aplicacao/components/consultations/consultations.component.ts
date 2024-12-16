import { Component, OnInit, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs'; // Importando Observable
import { ConsultasService } from '../../services/consultas.service';
import { Appointments } from '../../model/appointments.model';

@Component({
  selector: 'app-consultations',
  standalone: true,
  imports: [CommonModule],
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