import { TestBed } from '@angular/core/testing';

import { RsPaginationLibService } from './rs-pagination-lib.service';

describe('RsPaginationLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RsPaginationLibService = TestBed.get(RsPaginationLibService);
    expect(service).toBeTruthy();
  });
});
