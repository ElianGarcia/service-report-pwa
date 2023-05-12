import { TestBed } from '@angular/core/testing';

import { CronometerService } from './cronometer.service';

describe('CronometerService', () => {
  let service: CronometerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CronometerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
