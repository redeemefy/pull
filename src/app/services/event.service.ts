import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Comment } from '../models/Comment';
import { Injectable } from '@angular/core';
import { Event } from '../models/Event';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Injectable()
export class EventService {
  comments: FirebaseListObservable<Comment[]>;
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

  getSingleEvent(id) {
    return this._af.object('/events/' + id) as FirebaseObjectObservable<Event>;
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

  deleteEvent(id) {
    return this.events.remove(id);
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
  updateEvents(id, event) {
    return this.events.update(id, event);
  }

  /**
   * Generates a timestamp once the object gets pushed to Firebase.
   *
   * @returns {object} : Firebase timestamp
   *
   * @memberOf EventService
   */
  firebaseTimestamp() {
    return _.get(firebase, 'database.ServerValue.TIMESTAMP');
  }

  /**
   * Add new user comment to Firebase at events/comments node.
   *
   * @param {object: Comment} comment
   * @returns {object: Comment} : the new comment added
   *
   * @memberOf EventService
   */
  addNewCommentToEvent (id, comment) {
    return this._af.database.ref(`/events/${id}`).child('/comments').push(comment)
  }

  // getAllCommentsForSingleEvent(id) {
  //   return this._af.object(`/events/${id}/comments`) as FirebaseObjectObservable<Comment>;
  // }

  getIdFromLocalStorage() {
    return new Promise((resolve, reject) => {
      let id = JSON.parse(localStorage.getItem('currentUser'))
      return id ? resolve(id) : reject(error => error);
    })
  }
}
