import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the Student2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student2',
  templateUrl: 'student2.html',
})
export class Student2Page {
  student2Array = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Student2Page');
  }
  loadstudentData() {
    let url = "http://localhost/service/getstudenAD2.php";

    this.http.get(url).subscribe((data: any) => {
      this.student2Array = data.student;
      console.log(this.student2Array);
    }, (error) => { console.log(error) });

  }

  viewDetail(item: any) {
    this.navCtrl.push("SickStdForTeacherPage", item);

  }
}
