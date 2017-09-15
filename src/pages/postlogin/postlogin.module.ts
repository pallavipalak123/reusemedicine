import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostloginPage } from './postlogin';

@NgModule({
  declarations: [
    PostloginPage,
  ],
  imports: [
    IonicPageModule.forChild(PostloginPage),
  ],
  exports: [
    PostloginPage
  ]
})
export class PostloginPageModule {}
