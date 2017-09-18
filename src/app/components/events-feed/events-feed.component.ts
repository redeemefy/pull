import { EventService } from '../../services/event.service';
import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/Event';
import { User } from '../../models/User';

@Component({
  selector: 'app-events-feed',
  templateUrl: './events-feed.component.html',
  styleUrls: ['./events-feed.component.css']
})
export class EventsFeedComponent implements OnInit {
  events: Event[];
  user: User = {};

  constructor(private _eventService: EventService, private _userService: UserService) {}

  ngOnInit() {
    this._eventService.getEvents().subscribe(events => {
      this.events = events;
    });
    let id = JSON.parse(localStorage.getItem('currentUser'));
    this._userService.getUserProfile(id).subscribe(currentUser => {
      this.user = currentUser[0];
    })
  }
}
