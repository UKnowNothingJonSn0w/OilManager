import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AUTH } from '../auth/auth.models';

/**
 *
 * Authorization Interceptor
 *
 */
@Injectable()
export class OilMonitorHttpInterceptor implements HttpInterceptor {

  /**
   *
   * Intercepts requests and adds specific headers
   *
   * @param request Incoming request
   * @param next Returns new request
   *
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const CONTENT_TYPE = 'Content-Type';
    const ct = request.headers.has(CONTENT_TYPE) ? request.headers.get(CONTENT_TYPE) : 'application/json';
    let headers;

    if (ct === 'multipart/form-data') {
        headers = new HttpHeaders({
          'Api-Key': '79f09918-0a0e-4e45-b386-4ad20800fdcd',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
          'Authorization': "OIL_MONITOR " + localStorage.getItem(AUTH)
        });
    } else {
      headers = new HttpHeaders({
        'Content-Type': ct,
        'Api-Key': '79f09918-0a0e-4e45-b386-4ad20800fdcd',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Authorization': "OIL_MONITOR " + localStorage.getItem(AUTH)
      });
    }

    const httpRequest = request.clone({
      headers: headers,
      url: environment.api + request.url
    });

    return next.handle(httpRequest);
  }
}
