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

  // private removeProduct(id: string): void {
  //   this.productList$.next(
  //     this.productList$.value.filter((product) => product.id !== id)
  //   );
  // }

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

  adddConsulta(appointment: Appointments): Observable<void> {
    return this.http.post<void>(this.apiUrl, appointment).pipe(
      tap(() => {
        this.addConsulta(appointment);
      })
    );
  }

  getConsultaById(id: string): Observable<Appointments> {
    return this.http.get<Appointments>(`${this.apiUrl}/${id}`);
  }

  editConsulta(appoitment: Appointments) {
    return this.http.put(`${this.apiUrl}/${appoitment.id}`, appoitment);
  }

  deleteConsulta(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
