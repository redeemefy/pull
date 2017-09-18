import { EventService } from '../../services/event.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { Event } from '../../models/Event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User = {};
  events: Event[];
  id: string;

  constructor(private _userService: UserService, private _eventService: EventService, private _authService: AuthService, private _router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      if (JSON.parse(localStorage.getItem('currentUser'))) {
        this.id = JSON.parse(localStorage.getItem('currentUser'));
        this._userService.getUserProfile(this.id).subscribe(user => {
          this.user = user[0];
        });
      }
      this._eventService.getEventsByUid(this.id).subscribe(userEvents => {
        this.events = userEvents;
        console.log(this.events)
      })
    }, 200);
  }
}
