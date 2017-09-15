import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit() {
    this._authService.getAuthUser().subscribe(auth => {
      if(auth){
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
        this._router.navigate(['/login'])
      }
    });
  }

  submitLogout() {
    this._authService.logout();
    this._router.navigate(['/login']);
  }
}
