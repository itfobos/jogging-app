import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {LoginComponent} from './login/login.component';
import {EmailComponent} from './email/email.component';
import {SignupComponent} from './signup/signup.component';

import {AngularFireAuthModule} from 'angularfire2/auth';
import {RecordsComponent} from './records/records.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {AuthGuardService} from './auth-guard.service';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



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
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    RecordsComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,

    RouterModule,
    routes,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,

    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
