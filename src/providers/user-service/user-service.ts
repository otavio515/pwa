import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { User } from '../../models/users';
import { ApiServiceProvider } from '../api-service/api-service';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/retry';

@Injectable()
export class UserServiceProvider {

  private _api: string
  private _isAuthenticated: boolean = false;

  constructor(private _http: HttpClient
    , private _apiService: ApiServiceProvider
  ) {
      this._api = this._apiService.url;
  }

  connect(email, password) {
    return this._http.post<User>(`${this._api}authentication`, { email, password })
      .do((authentication) => this.isLogged = true);
  }

  isTokenValid(token) {
    return this._http.post<boolean>(`${this._api}authenticationtoken`, {token})
    .toPromise()
    .then(value => {
      this.isLogged = value['valid'];
    })
    .catch(e => e);
    }

  get isLogged(): boolean {
    return this._isAuthenticated;
  }

  set isLogged(auhentication: boolean) {
    this._isAuthenticated = auhentication;
  }

}