import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeDataComponent } from './employe-data.component';

describe('EmployeDataComponent', () => {
  let component: EmployeDataComponent;
  let fixture: ComponentFixture<EmployeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
