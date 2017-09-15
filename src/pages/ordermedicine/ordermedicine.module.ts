import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrdermedicinePage } from './ordermedicine';

@NgModule({
  declarations: [
    OrdermedicinePage,
  ],
  imports: [
    IonicPageModule.forChild(OrdermedicinePage),
  ],
  exports: [
    OrdermedicinePage
  ]
})
export class OrdermedicinePageModule {}
