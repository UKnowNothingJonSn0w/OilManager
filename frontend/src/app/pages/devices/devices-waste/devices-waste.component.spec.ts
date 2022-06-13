import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesWasteComponent } from './devices-waste.component';

describe('DevicesWasteComponent', () => {
  let component: DevicesWasteComponent;
  let fixture: ComponentFixture<DevicesWasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicesWasteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
