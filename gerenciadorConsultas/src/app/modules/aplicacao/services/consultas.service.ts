import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointments } from '../Modal/appointments.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  private apiUrl = 'http://localhost:3000/appointments'; 

  constructor(private http: HttpClient) {}

  // Método para buscar todas as consultas
  getConsultas(): Observable<Appointments[]> {
    return this.http.get<Appointments[]>(this.apiUrl);
  }
}
