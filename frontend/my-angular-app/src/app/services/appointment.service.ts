import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment.model'

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl = 'http://localhost:8080/api/appointments';

  constructor(private http: HttpClient) { }

  getAllAppointmentsForDay(year: string, month: string, day: string, token: string): Observable<Appointment[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<Appointment[]>(`${this.baseUrl}/allforday?year=${year}&month=${month}&day=${day}`, { headers });
  }

  saveAppointment(date: string, time: string, userId: number, token: string): Observable<any> {
    const appointmentDateTime = `${date}T${time}:00`;
    const appointmentData = {
      userId: userId,
      appointment: appointmentDateTime
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(`${this.baseUrl}/create`, JSON.stringify(appointmentData), { headers });
  }

  getAppointment(userId: number): Observable<Appointment> {
    return this.http.get<Appointment>(`${this.baseUrl}/appointment?userId=${userId}`);
  }

  deleteAppointment(appointmentId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/appointment/${appointmentId}`);
  }

}
