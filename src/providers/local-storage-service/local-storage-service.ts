import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageServiceProvider {

  constructor() { }

  getToken(): string {
    let token = localStorage.getItem('token');

    if (!token) {
      console.log('Token nulo ou indefinido');
      return "";
    }

    return token;
  }

  setToken(token: string) {
    if (!token) {
      console.log('Token vazio, nulo ou indefinido');
      return false;
    }

    localStorage.setItem('token', token);
  }

  getImageProfile(): string {
    let imageUrl = localStorage.getItem('image');

    if (!imageUrl) {
      return "";
    }

    return imageUrl;
  }

  setImageProfile(imageUrl: string): void {
    if (!imageUrl) {
      return;
    }

    localStorage.setItem('image', imageUrl);
  }

}
