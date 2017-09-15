import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { Keyboard } from '@ionic-native/keyboard';

// import { SignUpPage } from '../pages/signUp/signUp';
// import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
// import { AccountverificationPage } from '../pages/accountverification/accountverification';
// import { AccountconfirmationPage } from '../pages/accountconfirmation/accountconfirmation';
// import { SigninPage } from '../pages/signin/signin';
import { HomePage } from '../pages/home/home';
// import { AccountdetailsPage } from '../pages/accountdetails/accountdetails';
// import { PostloginPage } from '../pages/postlogin/postlogin';
// import { UpdatePage } from '../pages/update/update';
// import { DroplocationsPage } from '../pages/droplocations/droplocations';
// import { OrdermedicinePage } from '../pages/ordermedicine/ordermedicine';
// import { UpdateprofilePage } from '../pages/updateprofile/updateprofile';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage ;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public storage: Storage,
              private keyboard: Keyboard) {
    platform.ready().then(() => {
    
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      
      setTimeout(() => {
        splashScreen.hide();
      }, 1000);
    });
  }
}