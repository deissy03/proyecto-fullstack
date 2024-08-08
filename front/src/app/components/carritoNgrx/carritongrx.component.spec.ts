import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritongrxComponent } from './carritongrx.component';

describe('CarritongrxComponent', () => {
  let component: CarritongrxComponent;
  let fixture: ComponentFixture<CarritongrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritongrxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritongrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
