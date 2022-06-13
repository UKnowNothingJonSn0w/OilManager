import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShipsService } from '../ships.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ships-add',
  templateUrl: './ships-add.component.html',
  styleUrls: ['./ships-add.component.scss']
})
export class ShipsAddComponent implements OnInit {
  public rows = [];
  public isloading = true;
  addShipForm!: FormGroup;
  get addShipF() { return this.addShipForm.controls; }


  constructor( 
    private formBuilder: FormBuilder,
    private ShipsService: ShipsService,
    private router: Router,

    ) { }

  ngOnInit(): void {
    this.addShipForm = this.formBuilder.group({
      id: ['', Validators.required],
      imo: ['', Validators.required],
      name: ['', Validators.required],
      note: ['', Validators.required],

      
    });
    this.isloading = false;
  }
  addShip()
  {
    if (this.addShipForm.invalid) {
      return;
    } else {
      const json_data = {
        id: this.addShipF.id.value,
        imo: this.addShipF.imo.value,
        name: this.addShipF.name.value,
        note: this.addShipF.note.value,
      }
      this.ShipsService.AddShip(json_data).subscribe(response => {
        if (response.status == "success") {
          this.router.navigate(['/ships']);
        }
      })
    }
  }

}
