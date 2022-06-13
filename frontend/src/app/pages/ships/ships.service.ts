import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()

export class ShipsService {
    constructor(private http: HttpClient) {
    }

    Ships():  Observable<any> {
        return this.http.get<any>(`ships`).pipe(
          map(response => {
              return response;})
          )
      };
      AddShip(json_data: any): Observable<any> {
        return this.http.post<any>(`ship-add`, json_data).pipe(
          map(response => {
            return response;
          })
        )
      };
}