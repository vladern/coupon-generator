import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CouponsModule } from './coupons/coupons.module';


const routes: Routes = [
  { path: '', redirectTo: '/coupons', pathMatch: 'full' },
  {
    path: 'coupons',
    loadChildren: () =>
      import('./coupons/coupons.module').then((m) => m.CouponsModule),
  },
  { path: '**', component: PageNotFoundComponent },
];



@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    CouponsModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
