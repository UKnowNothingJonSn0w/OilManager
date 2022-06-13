import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BarrelsService } from '../barrels.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barrels-add',
  templateUrl: './barrels-add.component.html',
  styleUrls: ['./barrels-add.component.scss']
})
export class BarrelsAddComponent implements OnInit {
  public addtypeform;
  public addmediumform;
  public rows = [];
  public isloading = true;
  addBarrelsForm!: FormGroup;
  get addBarrelsF() { return this.addBarrelsForm.controls; }
  addBarrelsTypeForm!: FormGroup;
  get addBarrelsTypeF() { return this.addBarrelsTypeForm.controls; }
  addBarrelsMediumForm!: FormGroup;
  get addBarrelsMediumF() { return this.addBarrelsMediumForm.controls; }

  constructor(
    private formBuilder: FormBuilder,
    private BarrelsService: BarrelsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.addBarrelsForm = this.formBuilder.group({
      type: ['', Validators.required],
      medium: ['', Validators.required],
      qty: ['', Validators.required],
      price: ['', Validators.required],

    });

    this.addBarrelsTypeForm = this.formBuilder.group({
      name: ['', Validators.required],
      medium: ['', Validators.required],

    });
    this.addBarrelsMediumForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
    this.isloading = false;
  }
  addBarrels() {
    if (this.addBarrelsForm.invalid) {
      return;
    } else {
      const json_data = {
        type: this.addBarrelsF.type.value,
        medium: this.addBarrelsF.medium.value,
        qty: this.addBarrelsF.qty.value,
        price: this.addBarrelsF.price.value,
      }
      this.BarrelsService.AddBarrels(json_data).subscribe(response => {
        if (response.status == "success") {
          this.router.navigate(['/barrels']);
        }
      })
    }
  }
  addTypeForm() {
    this.addtypeform = true
    console.log()
  }
  addBarrelsType() {
    if (this.addBarrelsTypeForm.invalid) {
      return;
    } else {
      const json_data = {
        name: this.addBarrelsTypeF.name.value,
        medium: this.addBarrelsTypeF.medium.value,
      }
      this.BarrelsService.AddBarrelsType(json_data).subscribe(response => {
        if (response.status == "success") {
          this.router.navigate(['/barrels']);
        }
      })
    }
  }
  addMediumForm() {
    this.addmediumform = true
    console.log()
  }
  addBarrelsMedium() {
    if (this.addBarrelsMediumForm.invalid) {
      return;
    } else {
      const json_data = {
        name: this.addBarrelsTypeF.name.value,
      }
      this.BarrelsService.AddBarrelsMedium(json_data).subscribe(response => {
        if (response.status == "success") {
          this.router.navigate(['/barrels']);
        }
      })
    }
  }
}
