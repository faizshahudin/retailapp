import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalesReportsPage } from './sales-reports';

@NgModule({
  declarations: [
    SalesReportsPage,
  ],
  imports: [
    IonicPageModule.forChild(SalesReportsPage),
  ],
})
export class SalesReportsPageModule {}
