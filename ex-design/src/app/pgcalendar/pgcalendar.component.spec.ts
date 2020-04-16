import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgcalendarComponent } from './pgcalendar.component';

describe('PgcalendarComponent', () => {
  let component: PgcalendarComponent;
  let fixture: ComponentFixture<PgcalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgcalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgcalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
