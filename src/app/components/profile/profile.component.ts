import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = {};

  constructor(private _router: Router, private _userService: UserService) {}

  ngOnInit() {}

  addProfile({ value, valid }: { value: User; valid: boolean }) {
    this._userService.addUserProfile(value);
    this._router.navigate(['/user-detail/:id']);
  }
}
