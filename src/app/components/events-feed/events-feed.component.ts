import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/Event';

@Component({
  selector: 'app-events-feed',
  templateUrl: './events-feed.component.html',
  styleUrls: ['./events-feed.component.css']
})
export class EventsFeedComponent implements OnInit {
  events: Event[];

  constructor(private _eventService: EventService) {}

  ngOnInit() {
    this._eventService.getEvents().subscribe(events => {
      this.events = events;
      console.log(events);
    });
  }
}
