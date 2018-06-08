import { Component, ViewChild } from '@angular/core';
import { LoginPage } from '../pages/login/login';
import { Nav } from 'ionic-angular';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { StatisticsPage } from '../pages/statistics/statistics';
import { ControlsPage } from '../pages/controls/controls';
import { LocalStorageServiceProvider } from '../providers/local-storage-service/local-storage-service';
import { HomePage } from '../pages/home/home';
import { EnvironmentsPage } from '../pages/environments/environments';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) public nav: Nav;
  rootPage: any = LoginPage;

  public pages = [
    { title: 'Environments', component: EnvironmentsPage.name, icon: '' },
    { title: 'Estatísticas', component: StatisticsPage.name, icon: 'stats' },
    { title: 'Controladores', component: ControlsPage.name, icon: 'color-wand' }
  ];

  constructor(
    private _userService: UserServiceProvider
    , private _localStorage: LocalStorageServiceProvider
  ) {
    this.isValidToken();
  }

  async isValidToken() {
    await this._userService.isTokenValid(this._localStorage.getToken());
    const authenticated = this._userService.isLogged;

    if (authenticated) {
      this.nav.setRoot(HomePage.name);
      return false;
    }

    this.nav.setRoot(LoginPage);
  }

  get isAuthenticated(): boolean {
    return this._userService.isLogged;
  }

  navigate(component) {
    const navLength = this.nav.length();

    if (navLength > 1 )
      this.nav.remove(1);

    this.nav.push(component);
  }

  private logout() {
    localStorage.removeItem('token');
    this._userService.isLogged = false;
    this.nav.setRoot(LoginPage);
  }

}
