import { EventService } from '../../services/event.service';
import { UserService } from '../../services/user.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/Event';
import { Router } from '@angular/router';
import { User } from '../../models/User';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  event: Event = {};
  user: User = {};

  constructor(
    private _eventService: EventService,
    private _router: Router,
    private _userService: UserService,
    private _toastr: ToastsManager
  ) {}

  ngOnInit() {
    let id = JSON.parse(localStorage.getItem('currentUser'));
    this._userService.getUserProfile(id).subscribe(currentUser => {
      this.user = currentUser[0];
    });
  }

  submitNewEvent({ value, valid }: { value: Event; valid: boolean }) {
    if (this.user.fullName) {
      value.hostName = this.user.fullName;
      value.hostEmail = this.user.email;
      value.hostId = this.user.uid;

      this._eventService.addEvent(value);
      this._toastr.success('Event added successfully!!!');
      this._router.navigate(['/']);
    } else {
      value.hostEmail = this.user.email;
      value.hostId = this.user.uid;

      this._eventService.addEvent(value);
      this._toastr.success('Event added successfully!!!');
      this._router.navigate(['/']);
    }
  }
}
