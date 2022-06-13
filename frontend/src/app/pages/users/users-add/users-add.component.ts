import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss']
})
export class UsersAddComponent implements OnInit {

  public rows = [];
  public isloading = true;
  addUserForm!: FormGroup;
  get addUsersF() { return this.addUserForm.controls; }

  constructor(
    private formBuilder: FormBuilder,
    private UsersService: UsersService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      mail: ['', Validators.required],
      phone: ['', Validators.required],
      department: ['', Validators.required],

      
    });
    this.isloading = false;
  }
  addUser()
  {
    if (this.addUserForm.invalid) {
      return;
    } else {
      const json_data = {
        id: this.addUsersF.id.value,
        name: this.addUsersF.name.value,
        surname: this.addUsersF.surname.value,
        mail: this.addUsersF.mail.value,
        phone: this.addUsersF.phone.value,
        department: this.addUsersF.department.value,
      }
      this.UsersService.AddUser(json_data).subscribe(response => {
        if (response.status == "success") {
          this.router.navigate(['/users']);
        }
      })
    }
  }
}
