// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { addProduct } from './../carrito-ngrx/carrito.actions';
// import { Product } from './product.model';
// import { CarritoState } from './carrito.reducer';
// //import {CarritoActions}  from './../carrito-ngrx/carrito.actions';

// @Component({
//   selector: 'app-carrito',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   template: `
//     <h2>Carrito</h2>
//     <!-- <input #productInput (keyup.enter)="addProduct(productInput.value); productInput.value = ''">
//     <button (click)="addProduct(productInput.value); productInput.value = ''">Add Todo</button> -->
//     <ul>
//       <li *ngFor="let producto of productos$ | async">
//         {{ producto.producto }} - {{ producto.cantidad }} - {{ producto.precio }}
//         <button (click)="addProduct(producto)">Agregar</button>
//       </li>
//     </ul>
//   `
// })
// export class CarritoComponent {
//   productos$: Observable<Product[]>;

//   constructor(private store: Store<{ carrito: CarritoState }>) {
//     this.productos$ = store.select(state => state.carrito.carrito);
//   }

//   addProduct(product: Product) {
//     this.store.dispatch(addProduct({ product }));
//   }
// }