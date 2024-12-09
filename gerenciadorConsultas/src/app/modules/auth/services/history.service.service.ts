import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { History } from '../models/history.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryServiceService {

  private apiUrl = 'http://localhost:3000/appointments';
  private appointmentsHistory: BehaviorSubject<History[]> = new BehaviorSubject<History[]>([]);

  constructor(private http: HttpClient) {
    // Ao inicializar o serviço, buscamos os compromissos da API e populamos o BehaviorSubject
    this.loadAppointmentsFromApi();
  }

  // Método para buscar os compromissos da API e atualizar o BehaviorSubject
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

  // Retorna os compromissos de forma reativa
  getAppointments(): Observable<History[]> {
    return this.appointmentsHistory.asObservable();
  }

  // Método para marcar um compromisso como concluído
  markAsDone(id: string, token: string): Observable<History> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<History>(`${this.apiUrl}/done/${id}`, {}, { headers });
  }

  // Adiciona um novo compromisso à lista de histórico local (BehaviorSubject)
  addAppointmentToHistory(appointment: History): void {
    const currentHistory = this.appointmentsHistory.getValue();
    this.appointmentsHistory.next([...currentHistory, appointment]);
  }
}
