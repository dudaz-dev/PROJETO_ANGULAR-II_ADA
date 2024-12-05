import { TestBed } from '@angular/core/testing';

import { SpamService } from './spam.service';

describe('SpamService', () => {
  let service: SpamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
