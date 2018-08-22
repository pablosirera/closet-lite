import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomeModule } from '../pages/home/home.module';
import { LoginModule } from '../pages/login/login.module'

import { Camera } from '@ionic-native/camera';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config'

@NgModule({
  bootstrap: [IonicApp],
  declarations: [MyApp],
  entryComponents: [MyApp],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig.fire),
    BrowserModule,
    FormsModule,
    HomeModule,
    LoginModule,
    IonicModule.forRoot(MyApp)
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    Camera,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    }
  ]
})
export class AppModule { }
