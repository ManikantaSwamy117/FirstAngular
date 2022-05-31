import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningAndDevelopmentComponent } from './learning-and-development.component';

describe('LearningAndDevelopmentComponent', () => {
  let component: LearningAndDevelopmentComponent;
  let fixture: ComponentFixture<LearningAndDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningAndDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningAndDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
