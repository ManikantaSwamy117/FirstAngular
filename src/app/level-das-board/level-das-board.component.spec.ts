import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelDasBoardComponent } from './level-das-board.component';

describe('LevelDasBoardComponent', () => {
  let component: LevelDasBoardComponent;
  let fixture: ComponentFixture<LevelDasBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelDasBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelDasBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
