import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { AuthService } from '../../services/auth.service';

@IonicPage({
  name: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginForm: FormGroup;
  loginError: string;

  constructor(
    public navCtrl: NavController,
    private auth: AuthService,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
      ]
    });
  }

  get form() {
    return this.loginForm.controls;
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const credentials = this.getCredentials();
    this.auth.signInWithEmail(credentials).then(
      () => {
        this.navCtrl.setRoot(HomePage);
      },
      error => {
        this.loginError = error.message;
      }
    );
  }

  signup() {
    if (this.loginForm.invalid) {
      return;
    }

    const credentials = this.getCredentials();
    this.auth.createUserWithEmail(credentials).then(
      () => {
        this.navCtrl.setRoot(HomePage);
      },
      error => {
        this.loginError = error.message;
      }
    );
  }

  getCredentials() {
    const dataForm = this.loginForm.value;

    return {
      email: dataForm.email,
      password: dataForm.password
    };
  }

  async loginWithGoogle() {
    await this.auth.signInWithGoogle();
    this.navCtrl.setRoot(HomePage);
  }
}
