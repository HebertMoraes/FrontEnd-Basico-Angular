import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtacamaComponent } from './atacama.component';

describe('AtacamaComponent', () => {
  let component: AtacamaComponent;
  let fixture: ComponentFixture<AtacamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtacamaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtacamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
