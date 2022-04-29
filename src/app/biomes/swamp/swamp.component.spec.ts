import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwampComponent } from './swamp.component';

describe('SwampComponent', () => {
  let component: SwampComponent;
  let fixture: ComponentFixture<SwampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
