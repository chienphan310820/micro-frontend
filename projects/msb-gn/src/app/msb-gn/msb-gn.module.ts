import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { msb_gnComponent } from './msb-gn.component';
import { MSB_GN_ROUTES } from './msb-gn.routes';


@NgModule({
  declarations: [
    msb_gnComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MSB_GN_ROUTES),
  ],
  providers: [],
})
export class msb_gnModule { }

