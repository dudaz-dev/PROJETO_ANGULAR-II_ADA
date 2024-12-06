import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Appointments } from '../Modal/appointments.model';

@Injectable({
  providedIn: 'root',
})
export class ConsultasService {
  private apiUrl = 'http://localhost:3000/appointments';
  private consultas$ = new BehaviorSubject<Appointments[]>([]);
  listaConsultas$ = this.consultas$.asObservable();

  constructor(private http: HttpClient) {}

  private addConsulta(newConsulta: Appointments): void {
    this.consultas$.next([...this.consultas$.value, newConsulta]);
  }

  private removeConsulta(id: string): void {
    this.consultas$.next(
      this.consultas$.value.filter((consulta) => consulta.id !== id)
    );
  }

  getConsultaById(id: string): Observable<Appointments> {
    return this.http.get<Appointments>(`${this.apiUrl}/${id}`);
  }

  getConsultas() {
    this.http.get<Appointments[]>(this.apiUrl).subscribe({
      next: (res) => {
        this.consultas$.next(res);
      },
      error: (error) => {
        console.error('Erro ao criar agendamento:', error);
      },
    });
  }

  saveConsulta(appointment: Appointments): Observable<void> {
    return this.http.post<void>(this.apiUrl, appointment).pipe(
      tap(() => {
        this.addConsulta(appointment);
      })
    );
  }

  editConsulta(appoitment: Appointments) {
    return this.http.put(`${this.apiUrl}/${appoitment.id}`, appoitment);
  }

  deleteConsulta(id: string) {
    return this.http
      .delete(`${this.apiUrl}/${id}`)
      .pipe(tap(() => this.removeConsulta(id)));
  }
}
