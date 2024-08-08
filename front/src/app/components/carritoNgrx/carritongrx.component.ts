import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Product } from '../../carrito-ngrx/product.model';
import { addProduct, deleteProduct } from '../../carrito-ngrx/carrito.actions';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-carritongrx',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carritongrx.component.html',
  styleUrl: './carritongrx.component.css'

})
export class CarritongrxComponent {

}
