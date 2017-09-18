import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/User';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  email: string;
  password: string;
  // isLoggedIn: boolean;
  user: User = {};

  constructor(
    private _userService: UserService,
    private _authService: AuthService,
    private _toastr: ToastsManager,
    private _router: Router
  ) {}

  /**
   * On component load...
   * If an user is authenticated, it will fetch current user
   * node from Firebase and set ugly_id in local storage.
   *
   * @memberOf LoginUserComponent
   */
  ngOnInit() {}

  /**
   * On click submitLogin() in login-user.component.html
   *
   * If login is successfull, ugly_id is set in local storage and redirect
   * to '/' which is handle by event-feed.component.ts, otherwise
   * redirect to login page.
   *
   * @memberOf LoginUserComponent
   */
  submitLogin() {
    this._authService
      .login(this.email, this.password)
      .then(response => {
        console.log('Login: ', response);
        this._authService.getAuthUser().subscribe(auth => {
          console.log(auth.uid);
          let id = auth.uid;
          this._userService.getUserByAuthKey(id).subscribe(currentUser => {
            localStorage.setItem('currentUser', JSON.stringify(currentUser[0].uid));
          });
          this._toastr.success(`You are logged in!`);
          this._router.navigate(['/']);
        });
      })
      .catch(error => {
        console.log('Error Login: ', error.message);
        this._toastr.error(`${error.message}`, null, {
          dismiss: 'controlled',
          showCloseButton: true
        });
        this._router.navigate(['/login']);
      });
  }
}
