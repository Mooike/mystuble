import { TestBed } from '@angular/core/testing';

import { EinkaufenService } from './einkaufen.service';

describe('EinkaufenService', () => {
  let service: EinkaufenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EinkaufenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
