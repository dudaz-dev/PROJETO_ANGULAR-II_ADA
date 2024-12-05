import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { History } from '../models/history.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryServiceService {

  private apiUrl = 'http://localhost:3000/appointments';

  constructor(private http: HttpClient) {}

  getAppointments(): Observable<History[]> {
    return this.http.get<History[]>(this.apiUrl);
  }

  markAsDone(id: string, token: string): Observable<History> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<History>(`${this.apiUrl}/done/${id}`, {}, { headers });
  }
}

