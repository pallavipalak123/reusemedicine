import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { SignUpPage } from'../signUp/signUp';
import { Platform } from 'ionic-angular';
import { AccountconfirmationPage } from'../accountconfirmation/accountconfirmation';
import 'rxjs/add/operator/debounceTime';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';

/**
 * Generated class for the AccountverificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var window: any;
declare var navigator: any;
console.log('account verification')
@Component({
  selector: 'page-accountverification',
  templateUrl: 'accountverification.html',
 
})
export class AccountverificationPage {
 networkState: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private platform: Platform,
              public spinnerDialog: SpinnerDialog,
              ) {
  }

sampleForm: FormGroup;
  ionViewWillLoad() {
    console.log('ionViewWillLoad SigninPage');
    this.sampleForm = new FormGroup({

      otp: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
    this.sampleForm.valueChanges
      .debounceTime(400)
      .subscribe(data => this.onValueChanged(data));
  }

  onValueChanged(data?: any) {
    console.log('message')
    if (!this.sampleForm) { return; }
    const form = this.sampleForm;
    for (const field in this.formErrors) {
      // clear previous error message
      this.formErrors[field] = [];
      this.sampleForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field].push(messages[key]);
        }
      }
    }
  }
  formErrors = {
    'otp': [],
  };
  validationMessages = {
    'otp': {
      'required': 'OTP is required.',
    },
  };

verification: { otp: string; }={
  otp: '111111',
}


signUppage(){
  this.navCtrl.popTo(SignUpPage);
}
accountconfirmationpage(){
  this.navCtrl.push(AccountconfirmationPage);
}


submit(values) {
    console.log(values)
  
    //for checking network connectivity
    this.networkState = navigator.connection.type;
    if (this.networkState ==='none') {
      console.log('network is not available.')

      window.plugins.toast.show("Network connection is not available", "short", "center");

    }
    else
    {
      console.log('network is available.')
   
      if(values.otp==this.verification.otp){
     console.log('ghghg')
      //for navigation to next page on success 
      this.navCtrl.push(AccountconfirmationPage);
    }
    
   else{
  this.showToast("Please enter the correct details","center")
} 
    }
  }

  showToast(message, position) {
    this.platform.ready().then(() => {
      window.plugins.toast.show(message, "short", position);
    });
  }
  

}
