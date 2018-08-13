import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor () {
    var config = {
      apiKey: "AIzaSyD3a2Zw2ARKg10cFRtjzm1Veh26RPcyfus",
      authDomain: "openclassrooms-a0304.firebaseapp.com",
      databaseURL: "https://openclassrooms-a0304.firebaseio.com",
      projectId: "openclassrooms-a0304",
      storageBucket: "openclassrooms-a0304.appspot.com",
      messagingSenderId: "415018350873"
    };
    firebase.initializeApp(config);
  }





}
