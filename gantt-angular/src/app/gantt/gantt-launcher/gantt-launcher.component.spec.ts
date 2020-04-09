import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttLauncherComponent } from './gantt-launcher.component';

describe('GanttLauncherComponent', () => {
  let component: GanttLauncherComponent;
  let fixture: ComponentFixture<GanttLauncherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanttLauncherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanttLauncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
