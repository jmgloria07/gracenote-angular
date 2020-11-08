import { TestBed } from '@angular/core/testing';

import { GracenoteApiService } from './gracenote-api.service';

describe('GracenoteApiService', () => {
  let service: GracenoteApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GracenoteApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
