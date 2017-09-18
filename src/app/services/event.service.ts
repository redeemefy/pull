import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Event } from '../models/Event';

@Injectable()
export class EventService {
  events: FirebaseListObservable<Event[]>;
  event: FirebaseObjectObservable<Event>;

  constructor(private _af: AngularFireDatabase) {
    this.events = this._af.list('/events');
  }

  /**
   * Fetches all the events of all users.
   *
   * @returns {array} : all users events
   *
   * @memberOf EventService
   */
  getEvents() {
    return this.events;
  }

  /**
   * Adds a new event.
   *
   * @param {Event interface} event :  single event
   *
   * @memberOf EventService
   */
  addEvent(event) {
    this.events.push(event);
  }

  /**
   * Fetches a single event by id.
   *
   * @param {string} id : event's id
   * @returns {array} : array with a single event
   *
   * @memberOf EventService
   */
  getEventsByUid(id) {
    return this._af.list('events', {
      query: {
        orderByChild: 'hostId',
        equalTo: id
      }
    });
  }

  /**
   * Updates each user's event.
   *
   * @param {string} id : event's id
   * @param {Event interface} event : current event
   * @returns {Promise} event : updated event
   *
   * @memberOf EventService
   */
  UpdateEvents(id, event){
    return this.events.update(id,event);
  }
}
