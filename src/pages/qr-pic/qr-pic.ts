import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the QrPicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-pic',
  templateUrl: 'qr-pic.html',
})
export class QrPicPage {

  qrpic = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrPicPage');
  }
  loadqrpicData(){
    let url = "http://localhost/preschool/get/get_parent_qr.php";

    this.http.get(url).subscribe((data: any) => {
      this.qrpic = data.qr;
      console.log(this.qrpic);
    }, (error) => { console.log(error) });

  }

}
