import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTextAppointmentComponent } from './set-text-appointment.component';

describe('SetTextAppointmentComponent', () => {
  let component: SetTextAppointmentComponent;
  let fixture: ComponentFixture<SetTextAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetTextAppointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetTextAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
