import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'msb-gn',
    loadChildren: () => import('msb-gn/msb_gnModule').then(m => m.msb_gnModule)
  },
  {
    path: 'msb-st',
    loadChildren: () => import('msb-st/msb_stModule').then(m => m.msb_stModule)
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
