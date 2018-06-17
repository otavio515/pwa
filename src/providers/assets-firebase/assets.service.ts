import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

@Injectable()
export class AssetsService {

  constructor(public http: HttpClient) {
  }


  uploadImage(image: File, id: number): any {
    return firebase.storage()
      .ref()
      .child(`users/${btoa(id.toString())}`)
      .put(image);
  }

  getImage(id: number): Promise<any> {
    return firebase.storage()
      .ref()
      .child(`users/${btoa(id.toString())}`)
      .getDownloadURL()
  }
}
