import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-controls',
  templateUrl: 'controls.html',
})
export class ControlsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserServiceProvider) {
  }

  ionViewCanEnter() {
    return this.userService.isTokenValid();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ControlsPage');
  }

}
