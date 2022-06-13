import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { PagesComponent } from '../pages/pages.component';
import { HomeComponent } from './home/home.component';
import { ShipsComponent } from './ships/ships.component';
import { DevicesComponent } from './devices/devices.component';
import { ShipsAddComponent } from './ships/ships-add/ships-add.component';
import { DevicesAddComponent } from './devices/devices-add/devices-add.component';
import { DevicesDetailsComponent } from './devices/devices-details/devices-details.component';
import { DevicesEditComponent } from './devices/devices-edit/devices-edit.component';
import { DevicesWasteComponent } from './devices/devices-waste/devices-waste.component';
import { TanksComponent } from './tanks/tanks.component';
import { TanksFillComponent } from './tanks/tanks-fill/tanks-fill.component';
import { TanksAddComponent } from './tanks/tanks-add/tanks-add.component';
import { BarrelsComponent } from './barrels/barrels.component';
import { BarrelsAddComponent } from './barrels/barrels-add/barrels-add.component';
import { UsersComponent } from './users/users.component';
import { UsersAddComponent } from './users/users-add/users-add.component';





const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'ships', component: ShipsComponent, canActivate: [AuthGuard] },
      { path: 'devices', component: DevicesComponent, canActivate: [AuthGuard] },
      { path: 'ships-add', component: ShipsAddComponent, canActivate: [AuthGuard] },
      { path: 'devices-add', component: DevicesAddComponent, canActivate: [AuthGuard] },
      { path: 'devices-details', component: DevicesDetailsComponent, canActivate: [AuthGuard] },
      { path: 'devices-edit', component: DevicesEditComponent, canActivate: [AuthGuard] },
      { path: 'devices-waste', component: DevicesWasteComponent, canActivate: [AuthGuard] },
      { path: 'tanks', component: TanksComponent, canActivate: [AuthGuard] },
      { path: 'tanks-fill', component: TanksFillComponent, canActivate: [AuthGuard] },
      { path: 'tanks-add', component: TanksAddComponent, canActivate: [AuthGuard] },
      { path: 'barrels', component: BarrelsComponent, canActivate: [AuthGuard] },
      { path: 'barrels-add', component: BarrelsAddComponent, canActivate: [AuthGuard] },
      { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
      { path: 'users-add', component: UsersAddComponent, canActivate: [AuthGuard] },

    ]
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule {
}