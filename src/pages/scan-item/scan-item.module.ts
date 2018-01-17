import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanItemPage } from './scan-item';

@NgModule({
  declarations: [
    ScanItemPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanItemPage),
  ],
})
export class ScanItemPageModule {}
