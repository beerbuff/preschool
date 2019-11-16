

import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import { QrcodePage } from './../qrcode/qrcode';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = QrcodePage;
  tab3Root = ContactPage;
   constructor() {

  }
}
