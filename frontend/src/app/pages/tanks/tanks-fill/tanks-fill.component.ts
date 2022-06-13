import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TanksService } from '../tanks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tanks-fill',
  templateUrl: './tanks-fill.component.html',
  styleUrls: ['./tanks-fill.component.scss']
})
export class TanksFillComponent implements OnInit {

  public rows = [];
  public isloading = true;
  FillTankForm!: FormGroup;
  get FillTankF() { return this.FillTankForm.controls; 
  }

  FillStreamForm!: FormGroup;
  get FillStreamF() { return this.FillStreamForm.controls; 
  }

  constructor(
    private formBuilder: FormBuilder,
    private TanksService: TanksService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.FillTankForm = this.formBuilder.group({
      barrel_type: ['', Validators.required],
      qty: ['', Validators.required],
      
    });
    this.FillStreamForm = this.formBuilder.group({
      price: ['', Validators.required],
      qty: ['', Validators.required],
      
    });

    this.isloading = false;
    
  }

  fillTank()
  {
    if (this.FillTankForm.invalid) {
      return;
    } else {
      const json_data = {
        barrel_type: this.FillTankF.barrel_type.value,
        qty: this.FillTankF.qty.value,
      }
      this.TanksService.fillTank(json_data).subscribe(response => {
        if (response.status == "success") {
          this.router.navigate(['/tanks']);
        }
      })
    }
  }
  fillStream()
  {
    if (this.FillStreamForm.invalid) {
      return;
    } else {
      const json_data = {
        price: this.FillStreamF.price.value,
        qty: this.FillStreamF.qty.value,
      }
      this.TanksService.fillStream(json_data).subscribe(response => {
        if (response.status == "success") {
          this.router.navigate(['/tanks']);
        }
      })
    }
  }
}
