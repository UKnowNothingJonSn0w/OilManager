import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()

export class BarrelsService {
    constructor(private http: HttpClient) {
    }

    Barrels():  Observable<any> {
        return this.http.get<any>(`barrels`).pipe(
          map(response => {
              return response;})
          )
      };
      AddBarrels(json_data: any): Observable<any> {
        return this.http.post<any>(`buy_barrel`, json_data).pipe(
          map(response => {
            return response;
          })
        )
      };
      AddBarrelsType(json_data: any): Observable<any> {
        return this.http.post<any>(`add_barrel_type`, json_data).pipe(
          map(response => {
            return response;
          })
        )
      };
      AddBarrelsMedium(json_data: any): Observable<any> {
        return this.http.post<any>(`add_medium`, json_data).pipe(
          map(response => {
            return response;
          })
        )
      };
}