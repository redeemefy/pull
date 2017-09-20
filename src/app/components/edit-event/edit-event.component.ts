import { Router, ActivatedRoute, Params } from '@angular/router';
import { EventService } from '../../services/event.service';
import { UserService } from '../../services/user.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/Event';
import { User } from '../../models/User';

/**
 *
 *
 * @export
 * @class EditEventComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})

export class EditEventComponent implements OnInit {
  event: Event = {};
  id: string;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _eventService: EventService,
    private _toastr: ToastsManager,
    private _router: Router
  ) {}

  ngOnInit() {
    this.id = this._activeRoute.snapshot.params['id'];
    this._eventService.getSingleEvent(this.id).subscribe(event => {
      this.event = event;
    });
  }

  /**
   *
   *
   * @param {{ value: Event; valid: boolean }} { value, valid }
   *
   * @memberOf EditEventComponent
   */
  submitUpDateEvent({ value, valid }: { value: Event; valid: boolean }) {
    if (!valid) {
      this._toastr.error('Please submit a valid form.');
      this._router.navigate(['/edit-event' + this.id]);
    } else {
      this._eventService.updateEvents(this.id, value);
      this._toastr.success('Event updated successfully!');
      this._router.navigate(['/user-detail']);
    }
  }
}
