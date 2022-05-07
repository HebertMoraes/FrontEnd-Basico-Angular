import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselImgsComponent } from './carrousel-imgs.component';

describe('CarrouselImgsComponent', () => {
  let component: CarrouselImgsComponent;
  let fixture: ComponentFixture<CarrouselImgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselImgsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
