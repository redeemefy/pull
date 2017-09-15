import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable()
export class UserService {
  users: FirebaseListObservable<User[]>;
  user: FirebaseObjectObservable<User>;
  id: string;

  constructor(private _af: AngularFireDatabase) {
    this.users = this._af.list('/users');
  }

  addUserProfile(user) {
    this.users.push(user);
  }

  getUser(id) {
    this.user = this._af.object('/users/'+id) as FirebaseObjectObservable<User>;
    return this.user;
  }
  updateUserProfile(id, user) {
    return this.users.update(id, user);
  }

  deleteUserProfile(id) {
    return this.users.remove(id);
  }
}
//   constructor(private _af: AngularFireDatabase) {
//     this.events = this._af.list('/events');
//   }

//   getEvents() {
//     return this.events;
//   }
//   addEvent(event) {
//     // add event code
//     this.events.push(event);
//   }
// }
