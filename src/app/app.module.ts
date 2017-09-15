import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from "@angular/http";
import { Network } from "@ionic-native/network";
import { EqualValidator } from '../validators';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { MyApp } from './app.component';
import { DataService } from '../providers/data-service';
import { Toast } from '@ionic-native/toast';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { SignUpPage } from '../pages/signUp/signUp';
import { AccountverificationPage } from '../pages/accountverification/accountverification';
import { AccountconfirmationPage } from '../pages/accountconfirmation/accountconfirmation';
import { SigninPage } from '../pages/signin/signin';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { DroplocationsPage } from '../pages/droplocations/droplocations';
import { HomePage } from '../pages/home/home';
import { PostloginPage } from '../pages/postlogin/postlogin';
import { AccountdetailsPage } from '../pages/accountdetails/accountdetails';
import { UpdateprofilePage } from '../pages/updateprofile/updateprofile';
import { MapPage } from '../pages/map/map';
import { OrdermedicinePage } from '../pages/ordermedicine/ordermedicine';


@NgModule({
  declarations: [
    MyApp,
    EqualValidator,
    SignUpPage,
    AccountverificationPage,
    AccountconfirmationPage,
    SigninPage,
    ForgotpasswordPage,
    DroplocationsPage,
    HomePage,
    PostloginPage,
    AccountdetailsPage,
    UpdateprofilePage,
    MapPage,
    OrdermedicinePage

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignUpPage,
    AccountverificationPage,
    AccountconfirmationPage,
    SigninPage,
    ForgotpasswordPage,
    DroplocationsPage,
    HomePage,
    PostloginPage,
    AccountdetailsPage,
    UpdateprofilePage,
    MapPage,
    OrdermedicinePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpinnerDialog,
    Keyboard,
    Toast,
    Geolocation,
    Network,
    Diagnostic,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataService
  ]
})
export class AppModule {}

