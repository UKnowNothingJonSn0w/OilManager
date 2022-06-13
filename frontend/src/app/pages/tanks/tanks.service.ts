import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()

export class TanksService {
    constructor(private http: HttpClient) {
    }

    fillTank(json_data: any): Observable<any> {
        return this.http.post<any>(`fill_from_barrel`, json_data).pipe(
          map(response => {
            return response;
          })
        )
      };
      fillStream(json_data: any): Observable<any> {
        return this.http.post<any>(`fill_by_stream`, json_data).pipe(
          map(response => {
            return response;
          })
        )
      };
      AddTanks(json_data: any): Observable<any> {
        return this.http.post<any>(`tanks-add`, json_data).pipe(
          map(response => {
            return response;
          })
        )
      };
}