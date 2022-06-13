import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DevicesService } from '../devices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devices-edit',
  templateUrl: './devices-edit.component.html',
  styleUrls: ['./devices-edit.component.scss']
})
export class DevicesEditComponent implements OnInit {

  public isloading = true;
  editDevicesForm!: FormGroup;

  get editDevicesF() { return this.editDevicesForm.controls; }

  constructor(
    private formBuilder: FormBuilder,
    private DevicesService: DevicesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.editDevicesForm = this.formBuilder.group({
      name: ['', Validators.required],
      notes: ['', Validators.required],
      
    });
    this.isloading = false;
  }
  updateDevice(){
    if (this.editDevicesForm.invalid) {
      return;
    } else {
      const json_data = {
      name: ['', Validators.required],
      notes: ['', Validators.required],
       
      }
      this.DevicesService.UpdateDevices(json_data).subscribe(response => {
        if (response.status == "success") {
          this.router.navigate(['/devices']);
        } else if (response.status == "error") {
        } 
      })
    }
  }
}
