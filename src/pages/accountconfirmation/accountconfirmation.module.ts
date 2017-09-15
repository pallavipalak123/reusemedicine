import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountconfirmationPage } from './accountconfirmation';

@NgModule({
  declarations: [
    AccountconfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountconfirmationPage),
  ],
  exports: [
    AccountconfirmationPage
  ]
})
export class AccountconfirmationPageModule {}
