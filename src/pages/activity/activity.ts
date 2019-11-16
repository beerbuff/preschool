import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {
 
  activityArray = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.loadacitivityData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityPage');
  }

  loadacitivityData(){
    let url = "http://localhost/service/getActivity.php";

    this.http.get(url).subscribe((data: any) => {
      this.activityArray = data.activity;
      console.log(this.activityArray);
    }, (error) => { console.log(error) });

  }
  viewActivity(item: any){
    this.navCtrl.push("ActivityPage",item);
  
  }

}//end class
