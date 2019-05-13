import { TestBed } from '@angular/core/testing';

import { AmbulanceWaitingListService } from './ambulance-waiting-list.service';

describe('AmbulanceWaitingListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmbulanceWaitingListService = TestBed.get(AmbulanceWaitingListService);
    expect(service).toBeTruthy();
  });
});
