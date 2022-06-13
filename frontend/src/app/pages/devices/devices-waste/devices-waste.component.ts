import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DevicesService } from '../devices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devices-waste',
  templateUrl: './devices-waste.component.html',
  styleUrls: ['./devices-waste.component.scss']
})
export class DevicesWasteComponent implements OnInit {
  public rows = [];
  public isloading = true;
  addWasteForm!: FormGroup;
  get addWasteF() { return this.addWasteForm.controls; 
  }

  constructor(
    private formBuilder: FormBuilder,
    private DevicesService: DevicesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.addWasteForm = this.formBuilder.group({
      waste: ['', Validators.required],
      waste_units: ['', Validators.required],
      per: ['', Validators.required],
      per_units: ['', Validators.required],

      
    });
    this.isloading = false;
  }
  addWaste()
  {
    if (this.addWasteForm.invalid) {
      return;
    } else {
      const json_data = {
        waste: this.addWasteF.waste.value,
        waste_units: this.addWasteF.waste_units.value,
        per: this.addWasteF.per.value,
        per_units: this.addWasteF.per_units.value,
      }
      this.DevicesService.AddWaste(json_data).subscribe(response => {
        if (response.status == "success") {
          this.router.navigate(['/devices-details']);
        }
      })
    }
  }
}
