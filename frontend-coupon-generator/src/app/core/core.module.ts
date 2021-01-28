import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { CouponsService } from './services/coupons.service';
import { HttpClientModule } from '@angular/common/http';

const materialModules = [
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule
];

const services = [
  CouponsService
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ...materialModules
  ],
  declarations: [],
  providers: [...services],
  exports: [...materialModules]
})
export class CoreModule { }
