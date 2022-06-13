import { Component, OnInit, ViewChild } from '@angular/core';
import { ShipsService } from './ships.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public rows = [];
  public loading = true;
  public ships = [];

  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(    
    private ShipsService: ShipsService,
    ) { }

  ngOnInit(): void {
    this.loadShips()
  };

  loadShips() {
    this.ShipsService.Ships().subscribe(response => {
      console.log(response)
      this.ships = response
     
    })
  };

}
