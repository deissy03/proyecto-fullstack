import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleComponent } from './example.component';

describe('Unit Testing of Example Component', () => {
  let component: ExampleComponent;
  let fixture: ComponentFixture<ExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add two numbers', () => {
    expect(component.add(2, 3, 'suma')).toBe(5)
    expect(component.add(5, -3, 'suma')).toBe(2)
    expect(component.add(-6, -4, 'suma')).toBe(-10)
    expect(component.add(5, 2, 'resta')).toBe(3)
  })

  it('should check if a number is even', () => {
    expect(component.isEven(2)).toBeTruthy();
    expect(component.isEven(3)).toBeFalsy();
  })

});
