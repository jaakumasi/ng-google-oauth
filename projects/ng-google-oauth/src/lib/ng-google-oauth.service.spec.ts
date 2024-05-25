import { TestBed } from '@angular/core/testing';

import { NgLibTestService } from './ng-google-oauth.service';

describe('NgLibTestService', () => {
  let service: NgLibTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgLibTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
