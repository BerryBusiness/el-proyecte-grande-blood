import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthResponse } from './auth-response.interface'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'http://localhost:8080/api/users';
  private loggedIn = new BehaviorSubject<boolean>(false);
  private userName = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {}

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  get currentUserName(): Observable<string | null> {
    return this.userName.asObservable();
  }

  login(credentials: { username: string; password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        if (response.token) {
          this.loggedIn.next(true);
          this.userName.next(credentials.username);
          localStorage.setItem('authToken', response.token);
        }
      })
    );
  }


  register(data: { username: string; password: string; email: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, data).pipe(
      tap(response => {
        if (response.token) {
          this.loggedIn.next(true);
          this.userName.next(data.username);
          console.log(data.username);
          localStorage.setItem('authToken', response.token);
        }
      })
    );
  }

  logout(): void {
    this.loggedIn.next(false);
    this.userName.next(null);
    localStorage.removeItem('authToken');
  }
}
