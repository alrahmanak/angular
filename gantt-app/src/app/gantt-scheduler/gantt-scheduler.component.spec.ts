import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttSchedulerComponent } from './gantt-scheduler.component';

describe('GanttSchedulerComponent', () => {
  let component: GanttSchedulerComponent;
  let fixture: ComponentFixture<GanttSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanttSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanttSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
