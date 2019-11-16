import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the SickPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sick',
  templateUrl: 'sick.html',
})
export class SickPage {

  returnSick = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SickPage');
  }

  postSick(ileave_description, iterm_id, ileave_startdate,ileave_enddate) {
    let postSick = { leave_description: ileave_description, term_id: iterm_id, 
      leave_startdate: ileave_startdate, leave_enddate: ileave_enddate };
    
    console.log(postSick);


    let url = "http://localhost/service/insert_leave.php";

    this.http.post(url, postSick).subscribe((data: any) => {
      this.returnSick = data.message;
      console.log(data.message);
      
    });

   
  
  }


}//end class
