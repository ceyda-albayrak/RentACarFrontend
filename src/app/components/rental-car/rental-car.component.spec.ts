import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalCarComponent } from './rental-car.component';

describe('RentalCarComponent', () => {
  let component: RentalCarComponent;
  let fixture: ComponentFixture<RentalCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
