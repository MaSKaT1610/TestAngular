import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../main/views/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'billing',
        loadChildren: () =>
          import('../main/views/billing/billing.module').then((m) => m.BillingModule),
      },
      {
        path: 'inventory',
        loadChildren: () =>
          import('../main/views/inventory/inventory.module').then((m) => m.InventoryModule),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('../main/views/reports/reports.module').then((m) => m.ReportsModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../main/views/profile/profile.module').then((m) => m.ProfileModule),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
