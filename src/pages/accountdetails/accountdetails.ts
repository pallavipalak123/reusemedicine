import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UpdateprofilePage } from'../updateprofile/updateprofile';
/**
 * Generated class for the AccountdetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-accountdetails',
  templateUrl: 'accountdetails.html',
})
export class AccountdetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountdetailsPage');
  }

//for navigation to updateprofile page
updateprofilepage(){
  this.navCtrl.push(UpdateprofilePage);
}

}
