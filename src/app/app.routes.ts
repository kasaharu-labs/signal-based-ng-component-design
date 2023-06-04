import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'pds-cqs', pathMatch: 'full' },
  {
    path: 'pds-cqs',
    loadComponent: () => import('./pds-cqs/pds-cqs.component'),
  },
];
