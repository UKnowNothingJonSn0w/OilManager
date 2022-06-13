import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PagesRoutingModule } from './pages-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



// COMPONENTS
// GENERAL COMPONENTS
import { PagesComponent } from './pages.component'
import { HomeComponent } from './home/home.component';
import { ShipsComponent } from './ships/ships.component';
import { DevicesComponent } from './devices/devices.component'
import { ShipsService } from './ships/ships.service';
import { ShipsAddComponent } from './ships/ships-add/ships-add.component';
import { DevicesService } from './devices/devices.service';
import { DevicesDetailsComponent } from './devices/devices-details/devices-details.component';
import { DevicesAddComponent } from './devices/devices-add/devices-add.component';
import { DevicesEditComponent } from './devices/devices-edit/devices-edit.component';
import { DevicesWasteComponent } from './devices/devices-waste/devices-waste.component';
import { TanksComponent } from './tanks/tanks.component';
import { TanksFillComponent } from './tanks/tanks-fill/tanks-fill.component';
import { TanksAddComponent } from './tanks/tanks-add/tanks-add.component';
import { TanksService } from './tanks/tanks.service';
import { BarrelsComponent } from './barrels/barrels.component';
import { BarrelsService } from './barrels/barrels.service';
import { BarrelsAddComponent } from './barrels/barrels-add/barrels-add.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users/users.service';
import { UsersAddComponent } from './users/users-add/users-add.component';




@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ShipsComponent,
    DevicesComponent,
    ShipsAddComponent,
    DevicesDetailsComponent,
    DevicesAddComponent,
    DevicesEditComponent,
    DevicesWasteComponent,
    TanksComponent,
    TanksFillComponent,
    TanksAddComponent,
    BarrelsComponent,
    BarrelsAddComponent,
    UsersComponent,
    UsersAddComponent,
  ],

  imports: [
    PagesRoutingModule,
    BrowserModule,
    HttpClientModule,
    MatSidenavModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,

  ],


  providers: [
    ShipsService,
    DevicesService,
    TanksService,
    BarrelsService,
    UsersService
  ],
  bootstrap: [PagesComponent],
})
export class PagesModule {

}
