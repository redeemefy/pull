import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { EventService } from '../../services/event.service';
import { User } from '../../models/User';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User = {};

  constructor(private _userService: UserService, private _authService: AuthService) {}

  ngOnInit() {
    setTimeout(() => {
      let id = JSON.parse(localStorage.getItem('currentUser'));
      console.log('User Id from user detail: ', id);
      this._userService.getUserByAuthKey(id).subscribe(user => {
        this.user = user[0];
      });
    }, 1000);
  }
}
