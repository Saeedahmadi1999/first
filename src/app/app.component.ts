import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  type = "recipe";


  constructor(){}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAvOK1i4bd9yAV4LO3WurKfEcpFbPKfnUY",
      authDomain: "recipe-project-b4c15.firebaseapp.com",
      databaseURL: "https://recipe-project-b4c15.firebaseio.com",
      projectId: "recipe-project-b4c15",
      storageBucket: "recipe-project-b4c15.appspot.com",
      messagingSenderId: "1073928232627"
    })
  }

  navigation(navType:string) {
    this.type = navType;
  }


  
}
