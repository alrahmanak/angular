import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartFiltersComponent } from './start-filters.component';

describe('StartFiltersComponent', () => {
  let component: StartFiltersComponent;
  let fixture: ComponentFixture<StartFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
