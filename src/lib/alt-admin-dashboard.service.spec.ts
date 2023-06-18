import { TestBed } from '@angular/core/testing';

import { AltAdminDashboardService } from './alt-admin-dashboard.service';

describe('AltAdminDashboardService', () => {
  let service: AltAdminDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AltAdminDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
