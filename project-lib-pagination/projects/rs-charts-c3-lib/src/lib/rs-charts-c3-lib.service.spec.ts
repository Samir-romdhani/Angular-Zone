import { TestBed } from '@angular/core/testing';

import { RsChartsC3LibService } from './rs-charts-c3-lib.service';

describe('RsChartsC3LibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RsChartsC3LibService = TestBed.get(RsChartsC3LibService);
    expect(service).toBeTruthy();
  });
});
