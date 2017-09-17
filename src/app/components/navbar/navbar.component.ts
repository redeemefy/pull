import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { FirebaseApp } from 'angularfire2';
import { User } from '../../models/User';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';

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
    private _fbApp: FirebaseApp,
    private _router: Router,
    private _afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this._authService.getAuthUser().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
        this._router.navigate(['/login']);
      }
    });
  }

  submitLogout() {
    this._authService.logout();
    localStorage.clear();
    this._router.navigate(['/login']);
  }
}
