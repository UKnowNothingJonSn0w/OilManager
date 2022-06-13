import { Component, OnInit, ViewChild } from '@angular/core';
import { BarrelsService } from './barrels.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-barrels',
  templateUrl: './barrels.component.html',
  styleUrls: ['./barrels.component.scss']
})
export class BarrelsComponent implements OnInit {

  public rows = [];
  public loading = true;
  public barrels = [];
  
  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(
    private BarrelsService: BarrelsService,

  ) { }

  ngOnInit(): void {
    this.loadBarrels()
  }

  loadBarrels() {
    this.BarrelsService.Barrels().subscribe(response => {
      console.log(response)
      this.barrels = response
     
    })
  };
}
