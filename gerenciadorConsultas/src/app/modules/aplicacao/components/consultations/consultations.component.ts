import { Component, OnInit, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ConsultasService } from '../../services/consultas.service';
import { Appointments } from '../../Modal/appointments.model';

@Component({
  selector: 'app-consultations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.css'],
})
export class ConsultationsComponent {
  // appointments: Appointments[] = [];
  appointmentsData = this.consultasService.listaConsultas$;

  constructor(
    private consultasService: ConsultasService,
    private destroyRef: DestroyRef
  ) {}

  // ngOnInit(): void {
  //   this.getAppointments();
  // }

  // getAppointments(): void {
  //   this.consultasService
  //     .getConsultas()
  //     .pipe(takeUntilDestroyed(this.destroyRef))
  //     .subscribe({
  //       next: (response) => {
  //         this.appointments = response;
  //       },
  //       error: (error) => {
  //         console.error('Erro ao buscar consultas:', error);
  //       },
  //     });
  // }
}
