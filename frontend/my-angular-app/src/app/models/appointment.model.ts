export class Appointment {
  id: number; // Corresponds to Java's Long
  appointment: string; // ISO string for LocalDateTime, consider adjusting as per actual use

  constructor(id: number, appointment: string) {
    this.id = id;
    this.appointment = appointment;
  }
}
