import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResetPasswordRequest } from '../models/reset-password.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) {}
 

}
