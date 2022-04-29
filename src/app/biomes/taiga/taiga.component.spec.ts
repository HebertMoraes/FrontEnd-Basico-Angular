import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaigaComponent } from './taiga.component';

describe('TaigaComponent', () => {
  let component: TaigaComponent;
  let fixture: ComponentFixture<TaigaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaigaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
