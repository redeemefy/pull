import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _afAuth: AngularFireAuth
  ) {}

  canActivate(): Observable<boolean> {
    return this._afAuth.authState.map(auth => {
      if (auth) {
        return true;
      } else {
        this._router.navigate(['/login']);
        return false;
      }
    })
  }
}
