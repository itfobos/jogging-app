import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private readonly fireAuth: AngularFireAuth, private readonly router: Router) {
  }

  canActivate(): boolean {
    if (this.fireAuth.auth.currentUser == null) {
      this.router.navigate(['/login']);
    }

    return true;
  }

}
