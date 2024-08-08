import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {

  add(a: number, b: number, type: string): number {
    if (type === 'suma') {
      return a + b;
    } else {
      return a - b;
    }
  }

  isEven(num: number): boolean {
    return num % 2 === 0;
  }

}
