import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {EmailComponent} from './email/email.component';
import {RecordsComponent} from './records/records.component';
import {AuthGuardService} from './auth-guard.service';


export const router: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login-email', component: EmailComponent},
  {path: 'records', component: RecordsComponent, canActivate: [AuthGuardService]}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
