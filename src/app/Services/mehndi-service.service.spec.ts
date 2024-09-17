import { TestBed } from '@angular/core/testing';

import { MehndiServiceService } from './mehndi-service.service';

describe('MehndiServiceService', () => {
  let service: MehndiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MehndiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
