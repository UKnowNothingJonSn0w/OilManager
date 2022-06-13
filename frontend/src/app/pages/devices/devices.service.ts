import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()

export class DevicesService {
    constructor(private http: HttpClient) {
    }
    Devices():  Observable<any> {
        return this.http.get<any>(`devices`).pipe(
          map(response => {
              return response;})
          )
      };

      AddDevice(json_data: any): Observable<any> {
        return this.http.post<any>(`device-add`, json_data).pipe(
          map(response => {
            return response;
          })
        )
      };
      AddWaste(json_data: any): Observable<any> {
        return this.http.post<any>(`waste-add`, json_data).pipe(
          map(response => {
            return response;
          })
        )
      };
      UpdateDevices(json_data: any): Observable<any> {
        return this.http.post<any>(`edit_device`, json_data).pipe(
          map(response => {
            return response;
          })
        )
      };
}