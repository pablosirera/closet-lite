import { Component, OnInit } from '@angular/core';
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

export class LoginPage implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  loginError: string;

  constructor(
    public navCtrl: NavController,
    private auth: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })
  }

  get form() {
    return this.loginForm.controls;
  }

  onSubmitForm() {
    if (this.loginForm.invalid) {
      return;
    }

    const credentials = this.getCredentials()
    this.auth.signInWithEmail(credentials).then(() => {
      this.navCtrl.setRoot(HomePage)
    }, error => {
      this.loginError = error.message
    })
  }

  onRegisterUser() {
    if (this.loginForm.invalid) {
      return;
    }

    const credentials = this.getCredentials()
    this.auth.createUserWithEmail(credentials).then(() => {
      this.navCtrl.setRoot(HomePage)
    }, error => {
      this.loginError = error.message
    })
  }

  getCredentials() {
    const dataForm = this.loginForm.value
    this.submitted = true

    return {
      email: dataForm.email,
      password: dataForm.password
    }
  }

  loginWithGoogle() { }

}
