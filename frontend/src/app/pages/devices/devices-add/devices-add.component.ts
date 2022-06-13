import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DevicesService } from '../devices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devices-add',
  templateUrl: './devices-add.component.html',
  styleUrls: ['./devices-add.component.scss']
})
export class DevicesAddComponent implements OnInit {
  public rows = [];
  public isloading = true;
  addDevicesForm!: FormGroup;
  get addDevicesF() { return this.addDevicesForm.controls; 
  }

  constructor(
    private formBuilder: FormBuilder,
    private DevicesService: DevicesService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.addDevicesForm = this.formBuilder.group({
      id: ['', Validators.required],
      tanks: ['', Validators.required],
      name: ['', Validators.required],
      note: ['', Validators.required],

      
    });
    this.isloading = false;
  }
  addDevice()
  {
    if (this.addDevicesForm.invalid) {
      return;
    } else {
      const json_data = {
        id: this.addDevicesF.id.value,
        tanks: this.addDevicesF.tanks.value,
        name: this.addDevicesF.name.value,
        note: this.addDevicesF.note.value,
      }
      this.DevicesService.AddDevice(json_data).subscribe(response => {
        if (response.status == "success") {
          this.router.navigate(['/devices']);
        }
      })
    }
  }
}
