import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrPicPage } from './qr-pic';

@NgModule({
  declarations: [
    QrPicPage,
  ],
  imports: [
    IonicPageModule.forChild(QrPicPage),
  ],
})
export class QrPicPageModule {}
