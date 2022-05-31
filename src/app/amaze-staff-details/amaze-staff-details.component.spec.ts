import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazeStaffDetailsComponent } from './amaze-staff-details.component';

describe('AmazeStaffDetailsComponent', () => {
  let component: AmazeStaffDetailsComponent;
  let fixture: ComponentFixture<AmazeStaffDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazeStaffDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazeStaffDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
