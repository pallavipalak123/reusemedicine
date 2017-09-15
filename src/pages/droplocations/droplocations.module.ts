import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DroplocationsPage } from './droplocations';

@NgModule({
  declarations: [
    DroplocationsPage,
  ],
  imports: [
    IonicPageModule.forChild(DroplocationsPage),
  ],
  exports: [
    DroplocationsPage
  ]
})
export class DroplocationsPageModule {}
