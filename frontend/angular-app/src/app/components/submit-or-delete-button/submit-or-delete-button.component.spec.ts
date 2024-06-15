import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitOrDeleteButtonComponent } from './submit-or-delete-button.component';

describe('SubmitOrDeleteButtonComponent', () => {
  let component: SubmitOrDeleteButtonComponent;
  let fixture: ComponentFixture<SubmitOrDeleteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitOrDeleteButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmitOrDeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
