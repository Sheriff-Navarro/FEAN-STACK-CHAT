import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyD_fQVhQvpH5wIgVItAeOmNU1T0-Ln6DqE",
    authDomain: "postop-6f331.firebaseapp.com",
    databaseURL: "https://postop-6f331.firebaseio.com",
    projectId: "postop-6f331",
    storageBucket: "postop-6f331.appspot.com",
    messagingSenderId: "195299499178"
  }


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
