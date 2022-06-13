import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanksAddComponent } from './tanks-add.component';

describe('TanksAddComponent', () => {
  let component: TanksAddComponent;
  let fixture: ComponentFixture<TanksAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanksAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TanksAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
