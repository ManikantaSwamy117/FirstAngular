import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyLoginFormComponent } from './dummy-login-form.component';

describe('DummyLoginFormComponent', () => {
  let component: DummyLoginFormComponent;
  let fixture: ComponentFixture<DummyLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyLoginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
