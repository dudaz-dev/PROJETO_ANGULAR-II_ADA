import { TestBed } from '@angular/core/testing';

import { HistoryServiceService } from './history.service.service';
describe('HistoryServiceService', () => {
  let service: HistoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
