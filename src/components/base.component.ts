import { UserServiceProvider } from './../providers/user-service/user-service';
import { App, NavController } from "ionic-angular";
import { OnInit } from "@angular/core";

export abstract class BaseComponent implements OnInit {

  protected navCtrl: NavController;

  constructor(
    public app: App,
    public userService: UserServiceProvider
  ) {}

  ngOnInit(): void {
    this.navCtrl = this.app.getActiveNavs()[0];
  }

  protected navigate(component: string): void {
    if (!component) {
      throw new Error('Componente undefined');
    }

    this.navCtrl.setRoot(component);
  }

  protected logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('image');
    this.userService.currentUser = undefined;
    this.navCtrl.setRoot('LoginPage');
  }

}
