import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrikanthComponent } from './srikanth.component';

describe('SrikanthComponent', () => {
  let component: SrikanthComponent;
  let fixture: ComponentFixture<SrikanthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrikanthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrikanthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
