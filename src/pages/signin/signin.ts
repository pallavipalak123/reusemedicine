import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignUpPage } from '../signUp/signUp';
import { Storage } from '@ionic/storage';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { Platform } from 'ionic-angular';
import { DataService } from '../../providers/data-service';
import { PostloginPage } from '../postlogin/postlogin';
/**
 * Generated class for the SigninPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var window: any;
declare var navigator: any;

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
  providers: [DataService]
})
export class SigninPage {
 networkState: any;

  constructor(public navCtrl: NavController,
  private storage: Storage,
  public navParams: NavParams,
  public spinnerDialog: SpinnerDialog,
  private platform: Platform,
  public dataservice: DataService,) {
  }
  sampleForm: FormGroup;
  ionViewWillLoad() {
    console.log('ionViewWillLoad SigninPage');
    this.sampleForm = new FormGroup({

   aadharoremail: new FormControl('', Validators.compose([
      
      ])),

      password: new FormControl('', Validators.compose([
       
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
    'password': [],
   
  };

  validationMessages = {
    'aadharoremail': {
    },
    'password': {
    }
    
  };


login1: { aadharoremail: string; }={
  aadharoremail: '111111111111',
}

login2: { aadharoremail: string; }={
  aadharoremail: 'email@gmail.com',
}

login3: { password: string; }={
  password: 'Password123',
}

  ionViewDidEnter() {

  }

  //for navigation back to registration page
  SignUppage() {
    this.navCtrl.setRoot(SignUpPage);
    console.log('congo')
  }
  
  //for navigation push to ForgotpasswordPage
  Forgotpasswordpage() {
    this.navCtrl.push(ForgotpasswordPage);
    console.log('success')
  }


  submit(values) {
    console.log('submit')
    console.log(values)
 
    //for checking network connectivity
    this.networkState = navigator.connection.type;
    if (this.networkState ==='none') {
      console.log('network is not available.')

      window.plugins.toast.show("Network connection is not available. Please check your internet connectivity.", "short", "center");

    }
    else
    {
      console.log('network is available.')
    if(values.aadharoremail==this.login1.aadharoremail || values.aadharoremail==this.login2.aadharoremail && values.password==this.login3.password){
     this.navCtrl.push(PostloginPage)
     this.showToast("Login Successfully","center")
     console.log(values)
  
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