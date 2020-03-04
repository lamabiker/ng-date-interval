import { TestBed } from '@angular/core/testing';

import { NgI18nDateIntervalService } from './ng-i18n-date-interval.service';

describe('NgI18nDateIntervalService', () => {
  let service: NgI18nDateIntervalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgI18nDateIntervalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
