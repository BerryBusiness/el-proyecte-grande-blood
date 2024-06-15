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
  private userId = new BehaviorSubject<number | null>(null);
  private userLoginSubject = new BehaviorSubject<number | null>(null);

  constructor(private http: HttpClient) {}

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  get currentUserName(): Observable<string | null> {
    return this.userName.asObservable();
  }
  get currentUserId(): Observable<number | null> {
    return this.userId.asObservable();
  }

  login(credentials: { username: string; password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        if (response.token && response.id !== undefined) {
          this.loggedIn.next(true);
          this.userName.next(credentials.username);
          this.userId.next(Number(response.id));
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('userId', response.id.toString());
          this.userLoginSubject.next(Number(response.id));
        } else {
          console.error('Token or id missing in response');
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

  getUserToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
