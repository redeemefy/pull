import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  email: string;
  password: string;
  isLoggedIn: boolean;

  constructor(private _router: Router, private _authService: AuthService) {}

  ngOnInit() {
    this._authService.getAuthUser().subscribe(auth => {
      if(auth){
        this._authService.getAuthUser
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
        this._router.navigate(['/login'])
      }
    });
  }

  submintLogin() {
    this._authService
      .login(this.email, this.password)
      .then(response => {
        this._router.navigate(['/']);
      })
      .catch(error => {
        this._router.navigate(['/login']);
      });
  }
}
