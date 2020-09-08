import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlistdemoComponent } from './plistdemo.component';

describe('PlistdemoComponent', () => {
  let component: PlistdemoComponent;
  let fixture: ComponentFixture<PlistdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlistdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlistdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
