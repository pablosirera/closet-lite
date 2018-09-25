import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AuthService } from '../../services/auth.service';
import { ProfilePage } from '../profile/profile';
import { GalleryPage } from '../gallery/gallery';

const PAGES = {
  profile: ProfilePage,
  gallery: GalleryPage
};

@IonicPage({
  name: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  image: string = null;

  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    private auth: AuthService
  ) {}

  logout() {
    this.auth.signOut();
    this.navCtrl.setRoot(HomePage);
  }

  navigateTo(page) {
    this.navCtrl.push(PAGES[page]);
  }

  //https://ionicframework.com/docs/native/camera/
  getPicture() {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 50,
      correctOrientation: false
    };
    this.camera
      .getPicture(options)
      .then(imageData => {
        this.image = `data:image/jpeg;base64,${imageData}`;
      })
      .catch(error => {
        console.error(error);
      });
  }
}
