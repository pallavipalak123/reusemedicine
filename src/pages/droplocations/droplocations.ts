import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Diagnostic } from '@ionic-native/diagnostic';
import { AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
// import { MapPage } from'../map/map';
/**
 * Generated class for the DroplocationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var google;
declare var map;

@IonicPage()
@Component({
  selector: 'page-droplocations',
  templateUrl: 'droplocations.html',
})
export class DroplocationsPage {


  @ViewChild('map') mapElement: ElementRef;
  map: any;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private diagnostic: Diagnostic,
    public geolocation: Geolocation,
    public alertCtrl: AlertController,
    private platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DroplocationsPage');
    // this.findnearest();
  }

  location() {
    this.diagnostic.isLocationEnabled().then(this.successCallback).catch(this.errorCallback);
  }
  successCallback = (available) => {
    if (available) {
      this.geolocation.getCurrentPosition().then((resp) => {
        console.log(resp)
      }).catch((error) => {
        console.log('Error getting location', error);
      });

    } else {
      let alert = this.alertCtrl.create({
        title: 'The App like to access your location?',
        message: 'The app can find your location.',
        buttons: [
          {
            text: 'Deny',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Allow',
            handler: () => {
              if (this.platform.is('android')) {
                this.diagnostic.switchToLocationSettings();
              }
              if (this.platform.is('ios')) {
                this.diagnostic.switchToSettings();
              }
            }
          }
        ]
      })
      alert.present();
    }
  }
  errorCallback = (e) => console.error(e);


  findnearest() {
    console.log('nearest location')
    
  }
}