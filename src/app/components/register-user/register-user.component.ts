import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
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
  user: User = {};

  constructor(private _router: Router, private _authService: AuthService, private _userService: UserService) {}

  ngOnInit() {}

  registerUser() {
    this._authService
      .register(this.email, this.password)
      .then(response => {
        this._authService.getAuthUser().subscribe(auth => {
          this.user.authKey = auth.uid;
          this.user.email = auth.email;
          this._userService.createUserProfileOnRegister(this.user);
        });
        this._router.navigate(['/user-detail']);
      })
      .catch(error => {
        this._router.navigate(['/register']);
      });
  }
}
