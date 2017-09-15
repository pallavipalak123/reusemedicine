import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SigninPage } from'../signin/signin';
import { MapPage } from'../map/map';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/debounceTime';
import { Validators, FormControl, FormGroup } from '@angular/forms';
/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var window: any;
declare var navigator: any;
@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
  
})
export class ForgotpasswordPage {
networkState: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public spinnerDialog: SpinnerDialog,
              private platform: Platform,) {
  }
sampleForm: FormGroup;
  ionViewWillLoad() {
    console.log('ionViewWillLoad ForgotpasswordPage');
    this.sampleForm = new FormGroup({

    aadharoremail: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
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
    'aadharoremail': [],
  };
  validationMessages = {
    
    'aadharoremail': {
      'required': 'Email is required',
      'pattern': 'Enter a valid email.'
    }
  };

reset1: { aadharoremail: string; }={
  aadharoremail: 'email@gmail.com',
}
reset2: { aadharoremail: string; }={
  aadharoremail: '111111111111'
}

 ionViewDidEnter() {

  }

backpage(){
  this.navCtrl.popTo(SigninPage);
}

previouspage(){
  this.navCtrl.popTo(SigninPage);
}

submit(values) {
    console.log('submit')
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
   
      if(values.aadharoremail==this.reset1.aadharoremail || values.aadharoremail==this.reset2.aadharoremail){
      //for navigation to next page on success
 
      this.navCtrl.push(MapPage);
     this.showToast("Thanks for entering correct details!","center")
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
