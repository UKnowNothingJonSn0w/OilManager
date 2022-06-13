import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipsAddComponent } from './ships-add.component';

describe('ShipsAddComponent', () => {
  let component: ShipsAddComponent;
  let fixture: ComponentFixture<ShipsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
