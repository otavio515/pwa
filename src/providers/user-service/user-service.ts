import { App } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelper } from "angular2-jwt";

import { LocalStorageServiceProvider } from './../local-storage-service/local-storage-service';
import { User } from '../../models/users';
import { API } from './../../utils/api.util';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/retry';

import * as firebase from 'firebase';

@Injectable()
export class UserServiceProvider {

  private jwtHelper: JwtHelper = new JwtHelper();
  private user: User;

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageServiceProvider
  ) { }

  connect(email, password) {
    return this.http.post<User>(`${API.URL}authentication`, { email, password });
  }

  connectWithFirebase(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  isTokenValid(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get<any>(`${API.URL}authenticationtoken`)
      .toPromise()
      .then((value: any) => {
        if (value.valid) {
          this.decodeToken();
          resolve(true)
        } else {
          reject(false);
        }
      })
      .catch((err) => reject(false));
    });
  }

  private decodeToken(): void {
    if (!this.localStorage.getToken()) {
      return;
    }

    let decodedToken = this.jwtHelper.decodeToken(this.localStorage.getToken());
    this.user = {email: decodedToken.email, id: decodedToken.id, token: '', image: this.localStorage.getImageProfile()};
  }

  get currentUser(): User {
    return this.user;
  }

  set currentUser(user: User) {
    this.user = user;
  }

}
