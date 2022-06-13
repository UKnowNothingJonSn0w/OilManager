import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

/**
 *
 * Service for Authorization and Authentication
 *
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   *
   * @ignore
   *
   */
  constructor(
    private http: HttpClient
  ) { }

  /**
  *
  * Checks if user is authorized and extends session
  *
  */
  public isAuthorized(): Observable<any> {
      return this.http.get('authorized').pipe(
        map(response => {
          return response;
        })
      );
  };


    /**
  *
  * Checks if user is authorized
  *
  */
 public isAuthorizedNoExt(): Observable<any> {
  return this.http.get('account/authorized?ext=false').pipe(
    map(response => {
      return response;
    })
  );
 };

  /**
   *
   * Signs out user from system
   *
   */
  public logout(): Observable<any> {
    return this.http.post('logout', {}).pipe(
      map(response => {
        return response;
      })
    );
  };
  
}
