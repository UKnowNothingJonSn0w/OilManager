import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from './users.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public rows = [];
  public loading = true;
  public users = [];

  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(
    private UsersService: UsersService,

  ) { }

  ngOnInit(): void {
    this.loadUsers()
  }
  
  loadUsers() {
    this.UsersService.Users().subscribe(response => {
      console.log(response)
      this.users = response
     
    })
  };
}
