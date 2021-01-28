import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { ListComponent } from './components/list/list.component';
import { CouponsRoutingModule } from './coupons-routing.module';
import { CoreModule } from '../core/core.module';

const components = [
  NavComponent,
  ListComponent
]

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    CouponsRoutingModule,
  ],
  declarations: [...components]
})
export class CouponsModule { }
