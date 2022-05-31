import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CataLogComponent } from './cata-log.component';

describe('CataLogComponent', () => {
  let component: CataLogComponent;
  let fixture: ComponentFixture<CataLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CataLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CataLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
