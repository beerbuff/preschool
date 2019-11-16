import { StudentPage } from './../pages/student/student';
import {HttpClientModule} from '@angular/common/http';
import { SickPage } from './../pages/sick/sick';

import { LoginPage } from './../pages/login/login';
import { QrcodePage } from './../pages/qrcode/qrcode'; //page
import { QRScanner } from '@ionic-native/qr-scanner'; //native
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ActivityPage } from '../pages/activity/activity';

@NgModule({
  declarations: [
    MyApp,
    QrcodePage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SickPage,
    StudentPage,ActivityPage
   
    ],
  imports: [
    BrowserModule, HttpClientModule ,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    QrcodePage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SickPage,
    StudentPage,
    ActivityPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen, QRScanner , 
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
