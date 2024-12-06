import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointments } from '../Modal/appointments.model';

@Injectable({
  providedIn: 'root',
})
export class ConsultasService {
  private apiUrl = 'http://localhost:3000/appointments';

  constructor(private http: HttpClient) {}

  getConsultas(): Observable<Appointments[]> {
    return this.http.get<Appointments[]>(this.apiUrl);
  }

  addConsulta(appointment: Appointments): Observable<void> {
    return this.http.post<void>(this.apiUrl, appointment);
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
