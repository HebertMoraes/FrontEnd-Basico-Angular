import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JungleComponent } from './jungle.component';

describe('JungleComponent', () => {
  let component: JungleComponent;
  let fixture: ComponentFixture<JungleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JungleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JungleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
