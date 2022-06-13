import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrelsAddComponent } from './barrels-add.component';

describe('BarrelsAddComponent', () => {
  let component: BarrelsAddComponent;
  let fixture: ComponentFixture<BarrelsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrelsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrelsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
