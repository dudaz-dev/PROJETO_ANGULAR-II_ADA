import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { History } from '../../auth/models/history.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryServiceService {

  private apiUrl = 'http://localhost:3000/appointments';
  private appointmentsHistory: BehaviorSubject<History[]> = new BehaviorSubject<History[]>([]);

  constructor(private http: HttpClient) {
    this.loadAppointmentsFromApi();
  }

  private loadAppointmentsFromApi(): void {
    this.http.get<History[]>(this.apiUrl).subscribe(
      (appointments) => {
        this.appointmentsHistory.next(appointments);
      },
      (error) => {
        console.error('Erro ao carregar os compromissos:', error);
      }
    );
  }
  
  getAppointments(): Observable<History[]> {
    return this.appointmentsHistory.asObservable();
  }

  markAsDone(id: string, token: string): Observable<History> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<History>(`${this.apiUrl}/done/${id}`, {}, { headers });
  }

  addAppointmentToHistory(appointment: History): void {
    const currentHistory = this.appointmentsHistory.getValue();
    this.appointmentsHistory.next([...currentHistory, appointment]);
  }
}
