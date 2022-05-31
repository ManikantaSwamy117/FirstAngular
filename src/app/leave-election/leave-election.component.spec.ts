import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveElectionComponent } from './leave-election.component';

describe('LeaveElectionComponent', () => {
  let component: LeaveElectionComponent;
  let fixture: ComponentFixture<LeaveElectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveElectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
