import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Appointments } from '../model/appointments.model'; 

@Injectable({
  providedIn: 'root',
})
export class ConsultasService {
  deleteConsulta(id: string) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:3000/appointments'; // URL base da API
  private consultasSubject = new BehaviorSubject<Appointments[]>([]); 
  // Gerencia a lista de consultas
  listaConsultas$ = this.consultasSubject.asObservable(); 
  // Observável para componentes

  constructor(private http: HttpClient) {}

   // Obter todas as consultas com status "SCHEDULED"
   getScheduledConsultations(): Observable<Appointments[]> {
    return this.http.get<Appointments[]>(this.apiUrl).pipe(
      tap((appointments) => {
        const scheduledAppointments = appointments.filter(
          (appointment) => appointment.status === 'SCHEDULED'
        );
        this.consultasSubject.next(scheduledAppointments); 
      })
    );
  }

  // Obter todas as consultas
  getConsultas(): Observable<Appointments[]> {
    return this.http.get<Appointments[]>(this.apiUrl).pipe(
      tap((appointments) => this.consultasSubject.next(appointments))
    );
  }

  // Salvar nova consulta
  saveConsulta(consulta: Appointments): Observable<Appointments> {
    return this.http.post<Appointments>(this.apiUrl, consulta).pipe(
      tap((newAppointment) => {
        const currentAppointments = this.consultasSubject.getValue();
        this.consultasSubject.next([...currentAppointments, newAppointment]);
      })
    );
  }

  // Excluir consulta
  cancelAppointment(id: string): Observable<void> {
    const url = `${this.apiUrl}/cancel/${id}`;
    return this.http.put<void>(url, null); // Realiza o PUT sem corpo
  }

  // Atualizar consulta
  updateConsulta(appointment: Appointments): Observable<Appointments> {
    return this.http
      .put<Appointments>(`${this.apiUrl}/${appointment.id}`, appointment)
      .pipe(
        tap((updatedAppointment) => {
          const updatedAppointments = this.consultasSubject
            .getValue()
            .map((appt) =>
              appt.id === updatedAppointment.id ? updatedAppointment : appt
            );
          this.consultasSubject.next(updatedAppointments);
        })
      );
  }

    // Busca todas as consultas
    getAppointments(): Observable<History[]> {
      return this.http.get<History[]>(this.apiUrl);
    }

  markAsDone(id: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/done/${id}`, {}).pipe(
        tap(() => {
            const updatedAppointments = this.consultasSubject.getValue().map((appt) =>
                appt.id === id ? { ...appt, status: 'DONE' } : appt
            );
            this.consultasSubject.next(updatedAppointments);
        })
    );
}
}  