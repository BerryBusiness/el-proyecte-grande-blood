import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service'; // Assuming you have an AuthService
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../models/appointment.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  imports: [CommonModule, RouterModule],
  providers: [AppointmentService],
  standalone: true
})
export class MainPageComponent implements OnInit, OnDestroy {
  appointment: Appointment | null = null;
  private authSubscription!: Subscription;
  private userSubscription!: Subscription;


  constructor(
    private authService: AuthService,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit() {
    this.authSubscription = this.authService.isLoggedIn.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.userSubscription = this.authService.currentUserId.subscribe(userId => {
          if (userId !== null) {
            this.fetchAppointment(userId);
          }
        });
      }
    });
  }

  private fetchAppointment(userId: number): void {
    this.appointmentService.getAppointment(userId).subscribe({
      next: (appointment) => this.appointment = appointment,
      error: (error) => console.error('Failed to fetch appointment', error)
    });
  }

  deleteAppointment(): void {
    if (this.appointment) {
      this.appointmentService.deleteAppointment(this.appointment.id).subscribe({
        next: () => {
          console.log('Appointment deleted successfully');
          this.appointment = null;
        },
        error: (error) => console.error('Failed to delete appointment', error)
      });
    }
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
