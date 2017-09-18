import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;
  user: FirebaseObjectObservable<any>;

  constructor(private _af: AngularFireDatabase) {
    this.users = this._af.list('/users') as FirebaseListObservable<User[]>;
  }

  addUserProfile(user) {
    return this.users.push(user);
  }

  getUserByAuthKey(id) {
    return this._af.list('/users/', {
      query: {
        orderByChild: 'authKey',
        equalTo: id
      }
    });
  }

  getUserProfile(id) {
    return this._af.list('users', {
      query: {
        orderByChild: 'uid',
        equalTo: id
      }
    });
  }

  updateUserProfile(id, user) {
    return this.users.update(id, user);
  }

  deleteUserProfile(id) {
    return this.users.remove(id);
  }
}
