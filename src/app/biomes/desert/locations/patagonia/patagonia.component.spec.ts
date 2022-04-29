import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatagoniaComponent } from './patagonia.component';

describe('PatagoniaComponent', () => {
  let component: PatagoniaComponent;
  let fixture: ComponentFixture<PatagoniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatagoniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatagoniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
