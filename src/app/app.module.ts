import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';


const firebaseConfig = {
  apiKey: 'AIzaSyDP8jeTulRDQDku1U2Ml41At2ciHVK1j7A',
  authDomain: 'jogging-app-f1e0e.firebaseapp.com',
  databaseURL: 'https://jogging-app-f1e0e.firebaseio.com',
  projectId: 'jogging-app-f1e0e',
  storageBucket: '',
  messagingSenderId: '204969847199'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
