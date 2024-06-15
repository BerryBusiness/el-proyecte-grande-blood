import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { AppointmentService } from '../../services/appointment.service';
import { AuthService } from '../../services/auth.service';
import {CalendarOptions} from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction"
import { DateClickArg } from '@fullcalendar/interaction';
import {TimesComponent} from "../../times/times.component";


@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, FullCalendarModule, TimesComponent],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [

  ]
})
export class CalendarComponent {
  calendarOptions!: CalendarOptions;
  availableTimes: string[] = [];
  times: string[] = ['08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30', '13:00',
    '13:30', '14:00', '14:30', '15:00'];
  selectedTime: string | null = null;
  currentDate: string | null = null;
  showTimes: boolean = false;


  constructor(
    private appointmentService: AppointmentService,
    private authService: AuthService
  ) {
    this.initCalendarOptions();
  }

  private initCalendarOptions(): void {
    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      weekends: false,
      businessHours: {
        daysOfWeek: [1, 2, 3, 4, 5],
        startTime: '09:00',
        endTime: '18:00',
      },
      events: [
        {
          title: 'Meeting',
          start: '2024-06-11T14:30:00',
          allDay: false
        }
      ],
      eventTimeFormat: {
        hour: '2-digit',
        minute: '2-digit',
        meridiem: false
      },
      dateClick: this.handleDateClick.bind(this)
    };
  }

  handleDateClick(arg: DateClickArg) {
    const date = new Date(arg.dateStr);
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    this.currentDate = year + '-' + month + '-' + day;

    const token = this.authService.getUserToken();
    if (token) {
      this.appointmentService.getAllAppointmentsForDay(year, month, day, token).subscribe({
        next: (appointments) => {
          const bookedTimes = appointments.map(item => item.appointment.substring(11, 16));
          const availableTimes = this.times.filter(time => !bookedTimes.includes(time));
          this.displayAvailableTimes(availableTimes);
        },
        error: (err) => {
          console.error('Error fetching appointments', err);
        }
      });
    } else {
      console.error('User is not authenticated');
    }
  }

  displayAvailableTimes(times: string[]) {
    console.log(times)
    this.availableTimes = times;
    this.showTimes = times.length > 0;
  }

  selectTime(time: string) {
    this.selectedTime = time;
    if (!this.currentDate) {
      console.error('No date selected');
      return;
    }

    this.authService.currentUserId.subscribe(userId => {
      const token = this.authService.getUserToken();
      if (userId && this.currentDate && token) {
        this.appointmentService.saveAppointment(this.currentDate, time, userId, token).subscribe({
          next: (result) => {
            console.log('Appointment saved successfully', result);
          },
          error: (error) => {
            console.error('Error saving appointment', error);
          }
        });
      } else {
        console.error('User ID is not available');
      }
    });

  }
}
