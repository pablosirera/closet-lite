import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  image: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  //https://ionicframework.com/docs/native/camera/
  getPicture() {
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 50,
      correctOrientation: false
    }
    this.camera.getPicture(options)
      .then(imageData => {
        this.image = `data:image/jpeg;base64,${imageData}`;
      })
      .catch(error => {
        console.error(error);
      });
  }

}
