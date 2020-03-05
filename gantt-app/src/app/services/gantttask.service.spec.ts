import { TestBed } from '@angular/core/testing';

import { GantttaskService } from './gantttask.service';

describe('GantttaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GantttaskService = TestBed.get(GantttaskService);
    expect(service).toBeTruthy();
  });
});
