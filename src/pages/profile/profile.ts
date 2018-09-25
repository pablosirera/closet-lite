import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  user: any;

  constructor(public navCtrl: NavController, private auth: AuthService) {
    this.user = this.auth.user;
    console.log(this.user);
  }
}
