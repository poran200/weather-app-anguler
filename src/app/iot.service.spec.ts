import { TestBed } from '@angular/core/testing';

import { IOTService } from './iot.service';

describe('IOTService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IOTService = TestBed.get(IOTService);
    expect(service).toBeTruthy();
  });
});
