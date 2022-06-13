import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrelsComponent } from './barrels.component';

describe('BarrelsComponent', () => {
  let component: BarrelsComponent;
  let fixture: ComponentFixture<BarrelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
