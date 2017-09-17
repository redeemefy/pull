import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
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
  user: User = {};
  constructor(private _authService: AuthService, private _userService: UserService, private _router: Router) {}

  ngOnInit() {
    this._authService.getAuthUser().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this._userService.getUser(auth.uid).subscribe(userData => {
          console.log('User Data: ', userData);
        })
      } else {
        this.isLoggedIn = false;
        this._router.navigate(['/login']);
      }
    });
  }

  submitLogout() {
    this._authService.logout();
    this._router.navigate(['/login']);
  }
}
