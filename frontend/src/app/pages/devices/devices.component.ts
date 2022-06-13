import { Component, OnInit, ViewChild } from '@angular/core';
import { DevicesService } from './devices.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  public rows = [];
  public loading = true;
  public devices = [];

  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(
    private DevicesService: DevicesService,

  ) { }

  ngOnInit(): void {
    this.loadDevices()

  }
  loadDevices() {
    this.DevicesService.Devices().subscribe(response => {
      console.log(response)
      this.devices = response
     
    })
  };

}
