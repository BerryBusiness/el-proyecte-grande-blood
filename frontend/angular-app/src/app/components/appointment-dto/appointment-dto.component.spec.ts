import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentDtoComponent } from './appointment-dto.component';

describe('AppointmentDtoComponent', () => {
  let component: AppointmentDtoComponent;
  let fixture: ComponentFixture<AppointmentDtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentDtoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
