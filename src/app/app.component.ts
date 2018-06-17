import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

import * as firebase from "firebase";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) public nav: Nav;
  rootPage: any = 'LoginPage';


  constructor() {

    var config = {
      apiKey: "AIzaSyBzOgE5AXJ_Gw-G8vPW0XYIlPV-7JBQYao",
      authDomain: "smart-house-55267.firebaseapp.com",
      databaseURL: "https://smart-house-55267.firebaseio.com",
      projectId: "smart-house-55267",
      storageBucket: "smart-house-55267.appspot.com",
      messagingSenderId: "734699778518"
    };

    firebase.initializeApp(config);

  }

}
