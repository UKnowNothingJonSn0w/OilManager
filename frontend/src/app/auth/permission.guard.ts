import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ToasterService } from 'angular2-toaster';
import { map } from 'rxjs/operators';
import { PermissionService } from './permission.service';

/**
 * Login RouteGuard
 */
@Injectable({
    providedIn: 'root'
})
export class PermissionGuard implements CanActivate {

    /**
     *
     * @ignore
     *
     */
    constructor(
        private http: PermissionService,
        private toastr: ToasterService,
        private router: Router
    ) { }

    /**
     *
     * Determines if user is logged in and then navigate to application
     *
     */
    canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        let module = state.url
        return this.http.hasPermission(module).pipe(
            map(response => {
                if (response['has_permission']) {
                    return true;
                } else {
                    this.toastr.pop('error', 'You do not have permission to this site');
                    return false;
                }
            })
        );
    }

    /**
     *
     * Determines if user is logged in and then navigate to child routes of the application
     *
     */
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(childRoute, state);
    }
}