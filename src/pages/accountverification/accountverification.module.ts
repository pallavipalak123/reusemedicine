import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountverificationPage } from './accountverification';

@NgModule({
  declarations: [
    AccountverificationPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountverificationPage),
  ],
  exports: [
    AccountverificationPage
  ]
})
export class AccountverificationPageModule {}
