import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { User } from '../../models/users';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageServiceProvider } from '../../providers/local-storage-service/local-storage-service';

//@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private _login: FormGroup;
  private _token: string;

  constructor(public navCtrl: NavController
    , private _formBuilder: FormBuilder
    , private _userService: UserServiceProvider
    , private _localStorage: LocalStorageServiceProvider
  ) {
    this._login = this._formBuilder.group({
      email: ['otavio@gmail.com', Validators.compose([Validators.required, Validators.email])],
      password: ['123', Validators.required]
    });

    this._token = this._localStorage.getToken();
  }

  ionViewDidEnter() {
    //this.isValidToken();
  }

  doLogin() {
    this._userService
      .connect(this.email, this.password)
      .subscribe(
        (user: User) => {
          this.goHome();
          this._localStorage.setToken(user.token);
        },
        (error) => {
          console.log(error)
        }
      );
  }

  private goHome(): void {
    this.navCtrl.setRoot(HomePage.name);
  }

  get email(): string {
    return this._login.value['email'];
  }

  get password(): string {
    return this._login.value['password'];
  }

  get token(): string {
    return this._token;
  }

  set token(token: string) {
    this._token = token;
  }
}