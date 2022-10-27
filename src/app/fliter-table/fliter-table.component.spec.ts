import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FliterTableComponent } from './fliter-table.component';

describe('FliterTableComponent', () => {
  let component: FliterTableComponent;
  let fixture: ComponentFixture<FliterTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FliterTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FliterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
