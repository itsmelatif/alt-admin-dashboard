import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltAdminDashboardComponent } from './alt-admin-dashboard.component';

describe('AltAdminDashboardComponent', () => {
  let component: AltAdminDashboardComponent;
  let fixture: ComponentFixture<AltAdminDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltAdminDashboardComponent]
    });
    fixture = TestBed.createComponent(AltAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
