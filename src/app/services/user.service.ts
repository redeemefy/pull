import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable()
export class UserService {
  users: FirebaseListObservable<User[]>;
  user: FirebaseObjectObservable<User>;
  // userKey: string;
  id: string;

  constructor(private _af: AngularFireDatabase, private _fbApp: FirebaseApp) {
    this.users = this._af.list('/users');
  }

  addUserProfile(user) {
    let userKey = this._fbApp.database().ref('/users').push().key;
    user.uid = userKey;
    this._fbApp.database().ref('/users').child(userKey).set(user);
  }

  createUserProfileOnRegister(user) {
    let userKey = this._fbApp.database().ref('/users').push().key;
    user.uid = userKey;
    this._fbApp.database().ref('/users').child(userKey).set(user);
  }

  getUser(id) {
    this.user = this._af.object('/users/'+id) as FirebaseObjectObservable<User>;
    return this.user;
  }

  // getUserByAuthKey(key) {
  //   this.user = this._af.object('/users'+key);
  //   return this.user;
  // }

  updateUserProfile(id, user) {
    return this.users.update(id, user);
  }

  deleteUserProfile(id) {
    return this.users.remove(id);
  }
}
