import { Injectable } from '@angular/core';

@Injectable()
export class ApiServiceProvider {

  private _url: string;

  constructor() {
    this._url = 'http://192.168.0.12:3333/';
  }

  get url() {
    return this._url;
  }

}