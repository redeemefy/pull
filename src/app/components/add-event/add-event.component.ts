import { EventService } from '../../services/event.service';
import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/Event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  event: Event = {};

  constructor(private _eventService: EventService, private _router: Router) {}

  ngOnInit() {}

  submitNewEvent({value, valid}: {value: Event; valid: boolean}) {
    console.log('New event: ', value);
    this._eventService.addEvent(value);
    this._router.navigate(['/']);
  }
}
