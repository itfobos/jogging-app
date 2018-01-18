import {Component} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private readonly fireAuth: AngularFireAuth, private readonly router: Router) {

  }

  logout() {
    this.fireAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    }, (error) => {
      console.error(error);
    });
  }

  isLogoutButtonActive() {
    return this.fireAuth.auth.currentUser !== null;
  }
}
