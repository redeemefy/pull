import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = {};

  constructor(private _router: Router, private _userService: UserService) { }

  ngOnInit() {
  }

  updateProfile(){
    // update profile code
  }

}

// $key?: string;
// uid?: string;
// fullName?: string;
// aboutMe?: string;
