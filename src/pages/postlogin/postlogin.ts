import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountdetailsPage } from '../accountdetails/accountdetails';
import { OrdermedicinePage } from '../ordermedicine/ordermedicine';
import { HomePage } from '../home/home';
/**
 * Generated class for the PostloginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-postlogin',
  templateUrl: 'postlogin.html',
  
})
export class PostloginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostloginPage');
  }


accountdetailspage(){
  this.navCtrl.push(AccountdetailsPage);
}

ordermedicinepage(){
  this.navCtrl.push(OrdermedicinePage);
}

homepage(){
  this.navCtrl.setRoot(HomePage);
}
}
