import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { msb_stComponent } from './msb-st.component';
import { MSB_ST_ROUTES } from './msb-st.routes';


@NgModule({
  declarations: [
    msb_stComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MSB_ST_ROUTES),
  ],
  providers: [],
})
export class msb_stModule { }

