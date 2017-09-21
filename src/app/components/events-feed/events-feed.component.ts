import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { EventService } from '../../services/event.service';
import { UserService } from '../../services/user.service';
import { Comment } from '../../models/Comment';
import { Event } from '../../models/Event';
import { User } from '../../models/User';
import { orderBy } from 'lodash';
import * as _ from 'lodash';

@Pipe({
  name: 'orderBy'
})
export class OrderByDate implements PipeTransform {
  transform = orderBy;
}

@Component({
  selector: 'app-events-feed',
  templateUrl: './events-feed.component.html',
  styleUrls: ['./events-feed.component.css']
})
export class EventsFeedComponent implements OnInit {
  events: Event[];
  comments: Comment[];
  user: User = {};
  id: string;
  objectKeys = Object.keys;

  constructor(private _eventService: EventService, private _userService: UserService) {}

  ngOnInit() {
    setTimeout(() => {
      if (JSON.parse(localStorage.getItem('currentUser'))) {
        this.id = JSON.parse(localStorage.getItem('currentUser'));
        this._userService.getUserProfile(this.id).subscribe(user => {
          this.user = user[0];
        });
      }
    }, 200);
    this._eventService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

  onSubmitAddNewComment({ value, valid }: { value: Comment; valid: boolean }) {
    if (this.user) {
      value.dateCreated = this._eventService.firebaseTimestamp();
      value.fullName = this.user.fullName;
      value.uid = this.user.uid;
      value.picUrl = '../../../assets/images/avatar/chris.jpg';
      this._eventService.addNewCommentToEvent(value.eventId, value);
    }
  }
}
