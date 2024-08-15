import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../carrito-ngrx/product.model';
import { Router } from '@angular/router';
import { AppState } from '../../app.state'; 
import { CartState } from '../../carrito-ngrx/carrito.reducer'; 

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  productsInCart$: Observable<Product[]>; // Usamos Observable en lugar de array directamente
  productsInCart: Product[] = [];
  
  //rura del carrito ngrx
  rutaActual:string=""

  constructor(private store: Store<AppState>) {
    // Aquí se define el observable para el estado del carrito
    this.productsInCart$ = this.store.pipe(select(state => state.cartState.products));
  }
  router=inject(Router)
  ngOnInit() {
     this.productsInCart$.subscribe(products => {
      this.productsInCart = products;
     
    });
   //ruta para q no se vea el carrito en otros componentes
  this.ObtenerRuta()
  
  }
  addProduct(product: Product) {
    // Implementa la lógica para agregar el producto al carrito
    console.log('Adding product:', product);
    
  }
   //ruta para q no se vea el carrito en otros componentes
  ObtenerRuta(){
    console.log(this.router.url)
    this.rutaActual = this.router.url
  }
}







