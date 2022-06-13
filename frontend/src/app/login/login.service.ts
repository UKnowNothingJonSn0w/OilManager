import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()

export class LoginService {

  constructor(private http: HttpClient) {
  }

  UserAuthorization(json_data): Observable<any> {
    return this.http.post<any>(`login`, json_data).pipe(
      map(response => {
        return response;
      })
    )
  };

};