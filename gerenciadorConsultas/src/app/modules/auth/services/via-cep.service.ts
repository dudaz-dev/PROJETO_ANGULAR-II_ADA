import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViaCepService {
  private apiUrl = 'https://viacep.com.br/ws/';

  constructor(private http: HttpClient) {}

  getAddressByZipCode(zipCode: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${zipCode}/json`).pipe(
      map((response) => {
        return response;
      })
    );
  }

  isValidZipCode(zipCode: string): boolean {
    return /^[0-9]{8}$/.test(zipCode);
  }
}
