import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

/**
 * Atuhorization Route Guard
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  /**
   *
   * @ignore
   *
   */
  constructor(
    private router: Router,
    private http: AuthService,
  ) { }

  /**
   * Determines if user is logged in
   */
  canActivate(): Observable<boolean> {
    return this.http.isAuthorized().pipe(
      map(response => {
        if ((response.online !== true)) {
          this.router.navigate(['login']);
          return false;
        } else {
          return true;
        }
      })
    );
  }

  /**
   * Determines if user logged in for child routes
   */
  canActivateChild(): Observable<boolean> {
    return this.canActivate();
  }
}
