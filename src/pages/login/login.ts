import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'login'
})

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  modelForm = {}

  constructor(public navCtrl: NavController) {
  }

  onSubmitForm() {
    console.log(this.modelForm)
    this.navCtrl.push('home');
  }

}
