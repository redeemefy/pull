import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  email: string;
  password: string;

  constructor(private _router: Router, private _authService: AuthService) {}

  ngOnInit() {}

  registerUser() {
    this._authService
      .register(this.email, this.password)
      .then(response => {
        this._router.navigate(['/']);
      })
      .catch(error => {
        this._router.navigate(['/register']);
      });
  }
}
