import { NgModule } from '@angular/core';
import { AltAdminDashboardComponent } from './alt-admin-dashboard.component';
import { AltAdminDashboardRoutingModule } from './alt-admin-dashboard-routing.module';
import { AltSharedModuleModule } from 'projects/alt-shared-module/src/public-api';



@NgModule({
  declarations: [
    AltAdminDashboardComponent
  ],
  imports: [
    AltAdminDashboardRoutingModule,
    AltSharedModuleModule
  ],
  exports: [
    AltAdminDashboardComponent
  ]
})
export class AltAdminDashboardModule { }
