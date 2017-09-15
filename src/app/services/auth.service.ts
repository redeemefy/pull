import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  email: string;
  password: string;
  constructor(private _afAuth: AngularFireAuth) {}

  register(email, password) {
    return new Promise((resolve, reject) => {
      this._afAuth.auth.createUserWithEmailAndPassword(email, password).then(
        userData => {
          console.log('User Data: ', userData);
          resolve(userData);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  login(email, password) {
    return new Promise((resolve, reject) => {
      this._afAuth.auth
        .signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData), error => reject(error));
    });
  }

  logout() {
    this._afAuth.auth.signOut();
  }

  getAuthUser() {
    return this._afAuth.authState.map(auth => auth);
  }

}
