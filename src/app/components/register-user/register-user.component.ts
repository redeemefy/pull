import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/User';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  email: string;
  password: string;
  uglyId: string;
  user: User = {};

  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private _toastr: ToastsManager,
    private _router: Router
  ) {}

  ngOnInit() {}

  /**
   *
   *
   *
   * @memberOf RegisterUserComponent
   */
  registerUser() {
    this._authService
      .register(this.email, this.password)
      .then(response => {
        if (response) {
          this._toastr.success(`User registered successfully!`, null, { dismiss: 'controlled', showCloseButton: true });
          this._authService.getAuthUser().subscribe(auth => {
            this.user.authKey = auth.uid;
            this.user.email = auth.email;
            this._userService.addUserProfile(this.user).then(user => {
              this.uglyId = user.path.pieces_[1];
              localStorage.setItem('currentUser', JSON.stringify(this.uglyId));
              this.user.uid = this.uglyId;
              this._userService.updateUserProfile(this.uglyId, this.user);
            });
          });
        }
        this._router.navigate(['/user-detail']);
      })
      .catch(error => {
        this._router.navigate(['/register']);
      });
  }
}
