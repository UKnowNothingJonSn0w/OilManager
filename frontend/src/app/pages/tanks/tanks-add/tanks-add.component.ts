import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TanksService } from '../tanks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tanks-add',
  templateUrl: './tanks-add.component.html',
  styleUrls: ['./tanks-add.component.scss']
})
export class TanksAddComponent implements OnInit {

  public rows = [];
  public isloading = true;
  addTanksForm!: FormGroup;
  get addTanksF() { return this.addTanksForm.controls; }

  constructor(
    private formBuilder: FormBuilder,
    private TanksService: TanksService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.addTanksForm = this.formBuilder.group({
      name: ['', Validators.required],
      medium: ['', Validators.required],
      volume: ['', Validators.required],
      devices: ['', Validators.required],
      
    });
    this.isloading = false;
  }
  addTanks()
  {
    if (this.addTanksForm.invalid) {
      return;
    } else {
      const json_data = {
        name: this.addTanksF.id.value,
        medium: this.addTanksF.medium.value,
        volume: this.addTanksF.volume.value,
        devices: this.addTanksF.devices.value,
      }
      this.TanksService.AddTanks(json_data).subscribe(response => {
        if (response.status == "success") {
          this.router.navigate(['/tanks']);
        }
      })
    }
  }
}
