import { TestBed } from '@angular/core/testing';

import { SpruchService } from './spruch.service';

describe('SpruchService', () => {
  let service: SpruchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpruchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
