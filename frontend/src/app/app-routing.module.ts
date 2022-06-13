import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './auth/login.guard'


const routes: Routes = [
  { path: 'login',
    component: LoginComponent,
   canActivate: [LoginGuard] },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full',}
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
