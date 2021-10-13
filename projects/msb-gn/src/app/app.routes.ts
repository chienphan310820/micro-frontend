import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'msb_gn',
    pathMatch: 'full'
  },
  {
    path: 'msb_gn',
    loadChildren: () => import('./msb-gn/msb-gn.module').then(m => m.msb_gnModule),
  }
];
