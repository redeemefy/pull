import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { User } from '../../models/User';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  authKey: string;
  user: User = {};

  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private _afAuth: AngularFireAuth,
    private _toastr: ToastsManager,
    private _fbApp: FirebaseApp,
    private _router: Router
  ) {}

  ngOnInit() {
    this._authService.getAuthUser().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  submitLogout() {
    this._authService.logout();
    this._toastr.success('You successfully logged out!');
    localStorage.removeItem('currentUser');
    this._router.navigate(['/login']);
  }
}
