import { EventService } from '../../services/event.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/Event';
import { User } from '../../models/User';
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

  constructor(
    private _eventService: EventService,
    private _userService: UserService,
    private _authService: AuthService,
    private _toastr: ToastsManager,
    private _router: Router
  ) {}

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
      });
    }, 200);
  }

  deleteEvent(id) {
    this._eventService
      .deleteEvent(id)
      .then(event => {
        if (event === undefined) {
          this._toastr.success('Event successfully deleted!');
        }
      })
      .catch(error => {
        this._toastr.error(error.message);
      });
  }
}
