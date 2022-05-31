import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazeDataComponent } from './amaze-data.component';

describe('AmazeDataComponent', () => {
  let component: AmazeDataComponent;
  let fixture: ComponentFixture<AmazeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazeDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
