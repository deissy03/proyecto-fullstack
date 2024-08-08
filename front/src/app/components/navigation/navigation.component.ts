import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../carrito-ngrx/product.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppState } from '../../app.state';
// import { CarritoState } from '../../carrito-ngrx/carrito.reducer';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink,CommonModule],
   templateUrl: './navigation.component.html',
   styleUrl: './navigation.component.css',
   template: `
  <div>
    <h2>Carrito</h2>
    <ul>
      <li *ngFor="let producto of productos$ | async">
        {{ producto.producto }} - {{ producto.cantidad }} - {{ producto.precio }}
        <button (click)="addProduct(producto)">carrito</button>
      </li>
    </ul>
  </div>
`
})


export class NavigationComponent {
  productsInCart: Product[] = []
  constructor(private store: Store<AppState>) {}
  
  // fetch products from STATE
  getProducts(){
    this.store.pipe(select('cartProducts')).subscribe((products: Product[]) => {
      this.productsInCart = products
      console.log(products)
    })

  }
  ngOnInit() {
    this.getProducts()
  }




  // loginService = inject(LoginService);
  //   productos$: Observable<Product[]>;
  //   private store = inject(Store<{ product: { productos: Product[] } }>);
     private router = inject(Router);
  //   constructor() {
  //    this.productos$ = this.store.select('carrito');
  //  }
  //  get productCount$(): Observable<number> {
  //   return this.productos$.pipe(
  //     map(products => products.length)
  //   );
  // }
    
  //  ngOnInit(){
  //    console.log(this.productos$)
  //  }
  // navigateToCart() {
  //   this.router.navigate(['/cart']);
  //   }
}