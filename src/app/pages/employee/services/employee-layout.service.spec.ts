import { TestBed } from '@angular/core/testing';

import { EmployeeLayoutService } from './employee-layout.service';

describe('EmployeeLayoutService', () => {
  let service: EmployeeLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
