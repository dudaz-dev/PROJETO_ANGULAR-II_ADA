import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthenticatedUser } from '../models/authenticated-user.model';
import { UserCredentials } from '../models/user-credentials.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) {}

  register(user: User): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/register`, user);
  }

  login(credential: UserCredentials): Observable<AuthenticatedUser> {
    return this.http.post<AuthenticatedUser>(
      `${this.apiUrl}/login`,
      credential
    );
  }

  getAuthenticatedUser(): Observable<AuthenticatedUser> {
    return this.http.get<AuthenticatedUser>(`http://localhost:3000/users`);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
