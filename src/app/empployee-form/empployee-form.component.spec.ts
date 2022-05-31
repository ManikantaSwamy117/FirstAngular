import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpployeeFormComponent } from './empployee-form.component';

describe('EmpployeeFormComponent', () => {
  let component: EmpployeeFormComponent;
  let fixture: ComponentFixture<EmpployeeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpployeeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpployeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
