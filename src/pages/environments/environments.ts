import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { EnvsettingsPage } from '../envsettings/envsettings';

@IonicPage()
@Component({
  selector: 'page-environments',
  templateUrl: 'environments.html',
})
export class EnvironmentsPage {

  constructor(
    public navCtrl: NavController,
    public userService: UserServiceProvider
  ) { }

  ionViewCanEnter() {
    return this.userService.isTokenValid();
  }

  navigate(environment: number) {
    let env: string;
    switch (environment) {
      case 1:
        env = 'Livingroom';
        break;
      case 2:
        env = 'Bedroom One';
        break;
      case 3:
        env = 'Bedroom Two';
        break;
      case 4:
        env = 'Kitchen';
        break;
      case 5:
        env = 'Office';
        break;
      case 6:
        env = 'Bathroom';
        break;
      case 7:
        env = 'Laundry';
        break;
      case 8:
        env = 'Garage';
        break;
      default:
        env = '';
        break;
    }
    this.navCtrl.push(EnvsettingsPage.name, { environment: env });
  }

}
