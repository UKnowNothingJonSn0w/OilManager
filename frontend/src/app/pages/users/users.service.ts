import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()

export class UsersService {
    constructor(private http: HttpClient) {
    }

    Users():  Observable<any> {
        return this.http.get<any>(`users`).pipe(
          map(response => {
              return response;})
          )
      };
      
      AddUser(json_data: any): Observable<any> {
        return this.http.post<any>(`users-add`, json_data).pipe(
          map(response => {
            return response;
          })
        )
      };
}