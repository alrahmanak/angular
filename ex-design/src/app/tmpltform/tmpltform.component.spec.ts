import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmpltformComponent } from './tmpltform.component';

describe('TmpltformComponent', () => {
  let component: TmpltformComponent;
  let fixture: ComponentFixture<TmpltformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmpltformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmpltformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
