import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { EventService } from '../../services/event.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  constructor(private _userService: UserService) {}

  ngOnInit() {}
}
