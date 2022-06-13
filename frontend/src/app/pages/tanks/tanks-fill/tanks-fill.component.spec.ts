import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanksFillComponent } from './tanks-fill.component';

describe('TanksFillComponent', () => {
  let component: TanksFillComponent;
  let fixture: ComponentFixture<TanksFillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanksFillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TanksFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
