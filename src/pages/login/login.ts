import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'login'
})

@Component({
  selector: 'page-login',
  template: `
  <ion-content padding>
    <form (ngSubmit)="onSubmitForm()">
      <ion-item>
        <ion-label floating>Username</ion-label>
        <ion-input type="text" name="username" [(ngModel)]="modelForm.user"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label floating>Password</ion-label>
        <ion-input type="password" name="password" [(ngModel)]="modelForm.pass"></ion-input>
      </ion-item>

      <div padding>
        <button ion-button block>Sign In</button>
      </div>
    </form>
  </ion-content>
  `,
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
