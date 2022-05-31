import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardFormComponent } from './dash-board-form.component';

describe('DashBoardFormComponent', () => {
  let component: DashBoardFormComponent;
  let fixture: ComponentFixture<DashBoardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBoardFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
