import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DesertComponent } from './desert.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('DesertComponent', () => {
  let component: DesertComponent;
  let fixture: ComponentFixture<DesertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesertComponent ], 
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); 

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`titulo do bioma deve conter'Bioma Deserto'`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Bioma Deserto');
  });

  it('deve ter background branco', () => {
    const e = fixture.debugElement.query(By.css(".main-content-text")).nativeElement;
    expect(getComputedStyle(e).backgroundColor).toEqual('rgb(255, 255, 255)');
  });
  
});
