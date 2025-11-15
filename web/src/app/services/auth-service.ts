import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from '../models/user';

export interface AuthResponse {
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:5076/api/auth';
  private tokenSubject = new BehaviorSubject<string | null>(this.getToken());
  token$ = this.tokenSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(user: User) {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, user).pipe(
      tap(res => {
        localStorage.setItem('jwt', res.token);
        this.tokenSubject.next(res.token);
      })
    );
  }

  getUser() {
    return this.http.get<any>(`${this.apiUrl}/user`);
  }

  register(user: User) {
    return this.http.post<any>(`${this.apiUrl}/register`, user);
  }

  logout() {
    localStorage.removeItem('jwt');
    this.tokenSubject.next(null);
  }

  getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}