import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedDateInfoComponent } from './selected-date-info.component';

describe('SelectedDateInfoComponent', () => {
  let component: SelectedDateInfoComponent;
  let fixture: ComponentFixture<SelectedDateInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedDateInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectedDateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
