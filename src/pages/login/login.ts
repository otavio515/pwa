import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { User } from '../../models/users';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageServiceProvider } from '../../providers/local-storage-service/local-storage-service';
import { AssetsService } from '../../providers/assets-firebase/assets.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  login: FormGroup;
  notFound: boolean = false;
  isLoading: boolean = false;

  constructor(public navCtrl: NavController,
    private formBuilder: FormBuilder,
    private userService: UserServiceProvider,
    private localStorage: LocalStorageServiceProvider,
    private menuCtrl: MenuController,
    private assetsService: AssetsService
  ) {
    this.login = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  ionViewDidEnter() {
    this.userService.currentUser = {email: '', id: 0, token: '', image: ''};
    this.menuCtrl.enable(false, "menu");
    this.isValidToken();
  }

  async isValidToken() {
    let isValid: boolean = false;
    if (this.localStorage.getToken()) {
      isValid = await this.userService.isTokenValid();
    }

    if (isValid) {
      this.navCtrl.setRoot('HomePage');
    }
  }

  doLogin() {
    this.isLoading = true;
    this.userService
      .connect(this.email, this.password)
      .subscribe(
        (user: User) => {
          this.userService.connectWithFirebase(this.email, this.password)
            .then((auth: any) => {
              this.assetsService.getImage(user.id)
                .then((url: string) => {
                  user.image = url;
                  this.redirect(user);
                })
                .catch((error) => {
                  this.redirect(user);
                  this.isLoading = false;
                })
            })
            .catch((error) => {
              this.notFound = true;
              this.isLoading = false;
            })
        },
        (error) => {
          this.notFound = true;
          this.isLoading = false;
        }
      );
  }

  private redirect(user: User): void {
    this.userService.currentUser = user;
    this.localStorage.setToken(user.token);
    this.localStorage.setImageProfile(user.image);
    this.navCtrl.setRoot('HomePage');
  }

  get email(): string {
    return this.login.value['email'];
  }

  get password(): string {
    return this.login.value['password'];
  }
}
