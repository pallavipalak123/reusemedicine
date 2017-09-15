import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PostloginPage } from '../postlogin/postlogin';
/**
 * Generated class for the OrdermedicinePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ordermedicine',
  templateUrl: 'ordermedicine.html',
})
export class OrdermedicinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdermedicinePage');
  }
homepage(){
  this.navCtrl.setRoot(HomePage);
}
postlogin(){
  this.navCtrl.popTo(PostloginPage);
}
}
