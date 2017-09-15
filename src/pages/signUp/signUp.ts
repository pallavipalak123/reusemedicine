import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/debounceTime';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { Storage } from '@ionic/storage';
import { DataService } from '../../providers/data-service';
import { Toast } from '@ionic-native/toast';
import { AccountverificationPage } from '../accountverification/accountverification';
import { HomePage } from'../home/home';
import { SigninPage } from'../signin/signin';

/**
 * Generated class for the signUpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var window: any;
declare var navigator: any;
@IonicPage()
@Component({
  selector: 'page-signUp',
  templateUrl: 'signUp.html',
  providers: [DataService]
})
export class SignUpPage {
  networkState: any;

  constructor(public navCtrl: NavController,
    private platform: Platform,
    public spinnerDialog: SpinnerDialog,
    private toast: Toast,
    public dataservice: DataService,
    public storage: Storage,
    ) {
  }
  sampleForm: FormGroup;

  ionViewWillLoad() {
    console.log('ionViewWillLoad signUpPage');
    this.sampleForm = new FormGroup({

      aadharno: new FormControl('', Validators.compose([
        Validators.maxLength(14),
        Validators.minLength(12),
        Validators.pattern('^\\d+$'),
        Validators.required
      ])),

      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ])),

      mobile: new FormControl('', Validators.compose([
        Validators.pattern('^\\d+$'),
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.required
      ])),

      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
      ])),

      confirmPassword: new FormControl('', Validators.required),
      
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
    'aadharno': [],
    'email': [],
    'mobile': [],
    'password': [],
    'confirmPassword': []
  };

  validationMessages = {
    'aadharno': {
      'required': 'Aadhar no. is required.',
      'minlength': 'Aadhar no. must be at least 12 digits.',
      'maxlength': 'Aadhar no. cannot be more than 14 digits.',
      'pattern': 'Your Aadhar no. must contain only numbers.',
    },
    'email': {
      'required': 'Email is required',
      'pattern': 'Enter a valid email.'
    },
    'mobile': {
      'required': 'mobile no. is required',
      'minlength': 'Mobile number must contain 10 digits.',
      'maxlength': 'Mobile number cannot be more than 10 digits.',
      'validatePhone': 'Mobileno. should be only no.'
    },
    'password': {
      'required': 'Password is required',
      'pattern': 'Your password must contain at least one uppercase and 1 numeric character.'
 
    },
    'confirmPassword': {
      'required': 'Confirm password is required',
      'validateEqual': 'Password mismatch.'
    }
  };

  ionViewDidEnter() {

  }


//for navigation to signin page
Signinpage(){
 this.navCtrl.push(SigninPage);
}

 //for going backpage
 homepage(){
   this.navCtrl.setRoot(HomePage);
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
      //for showing the spinner dialogue
    this.spinnerDialog.show();

      this.dataservice.sendrequest(values)
        .subscribe(response => {
          console.log(response)

      //for hiding the spinner dialogue
      this.spinnerDialog.hide(); 
      
      //for navigation to next page on success
      this.navCtrl.push(AccountverificationPage);

        }, error => {
          console.log(error)
        })
    }
  }

  showToast(message, position) {
    this.platform.ready().then(() => {
      window.plugins.toast.show(message, "short", position);
    });
  }
  
}