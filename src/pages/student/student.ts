import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


/**
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {
  studentArray = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.loadstudentData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
  }
  loadstudentData(){
    let url = "http://localhost/service/getstudenAD1.php";

    this.http.get(url).subscribe((data: any) => {
      this.studentArray = data.student;
      console.log(this.studentArray);
    }, (error) => { console.log(error) });

  }

  viewDetail(item: any){
    this.navCtrl.push("SickStdForTeacherPage",item);
  
  }
}
