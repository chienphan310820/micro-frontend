import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'msb_st',
    pathMatch: 'full'
  },
  {
    path: 'msb_st',
    loadChildren: () => import('./msb-st/msb-st.module').then(m => m.msb_stModule),
  }
];
