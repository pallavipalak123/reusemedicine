import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignUpPage } from'../signUp/signUp';
import { SigninPage } from'../signin/signin';
import { DroplocationsPage } from'../droplocations/droplocations';
import { DataService } from '../../providers/data-service';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { Platform } from 'ionic-angular';
// import { Validators, FormControl, FormGroup } from '@angular/forms';
/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var window: any;
declare var navigator: any;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DataService]
})
export class HomePage {
networkState: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public dataservice: DataService,
              public spinnerDialog: SpinnerDialog,
              private platform: Platform,) {
  }

  ionViewWillLoad() {
    console.log('ionViewWillLoad HomePage');
  }

Droplocationspage(){
  this.navCtrl.push(DroplocationsPage);
   }

    signuppage(){
      this.navCtrl.push(SignUpPage);
    }
    
    signinpage(){
      this.navCtrl.push(SigninPage);
    }


submit(values) {
    console.log(values)

}

}