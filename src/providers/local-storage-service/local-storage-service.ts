import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageServiceProvider {

  constructor() { }

  getToken(): string {
    let token = localStorage.getItem('token');

    if (token === null || token === undefined) {
      console.log('Token nulo ou indefinido');
      return "";
    }

    return token;
  }

  setToken(token: string) {
    if (token === "" || token === null || token === undefined) {
      console.log('Token vazio, nulo ou indefinido');
      return false;
    }

    localStorage.setItem('token', token);
  }

}
