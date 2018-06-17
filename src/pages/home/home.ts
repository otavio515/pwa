import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, App } from 'ionic-angular'
import { UserServiceProvider } from '../../providers/user-service/user-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public userService: UserServiceProvider,
    public app: App
  ) {  }

  ionViewCanEnter(){
    return this.userService.isTokenValid();
  }

  ionViewDidEnter(){
    this.menuCtrl.enable(true, "menu");
  }

}
