import { StudentPage } from './../student/student';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SickPage } from '../sick/sick';
import { ActivityPage } from '../activity/activity';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

student(){
    this.navCtrl.push(StudentPage)
}

sick(){
    this.navCtrl.push(SickPage)
}

activity(){
  this.navCtrl.push(ActivityPage)
}
 
}//end class
