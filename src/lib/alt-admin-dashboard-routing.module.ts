import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltAdminDashboardComponent } from './alt-admin-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AltAdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module')
          .then(m => m.DashboardModule)
      },
      {
        path: 'maps',
        loadChildren: () => import('./modules/maps/maps.module')
          .then(m => m.MapsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AltAdminDashboardRoutingModule { }
