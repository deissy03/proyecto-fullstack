import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { DataService } from '../../service2/data.service';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';
import { Ejemplo } from '../../model/ejemplo';
import { LocalStorageService } from 'ngx-localstorage'; 
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addProduct } from '../../carrito-ngrx/carrito.actions';
import { Product } from '../../carrito-ngrx/product.model';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',

 
})
export class ShopComponent {

  toastrService = inject(ToastrService);
  loginService = inject(LoginService);
 

  name: string = '';

   
  productos:Ejemplo[]=[];
  totalCompra:number=0;
  constructor(
    private store: Store, 
    private dataService:DataService,
    private localStorageService: LocalStorageService,
    private router:Router
  ){}
 
  async ngOnInit() {
    const token: any = localStorage.getItem('token');
    if (token) {
      this.loginService.validateToken(token).subscribe((response: any) => {
        if (response.resultado === 'bien') {
          this.name = response.datos.name;
           this.toastrService.success(`Hello, ${this.name}!`);
        } else {
          this.loginService.logout();
        }
      });
    } else {
      this.loginService.logout();
    }

   this.productos = await this.dataService.getDatos();
   
  }
  agregarProductoAlCarrito(producto:Ejemplo){
    this.productos.push(producto);
    this.totalCompra +=producto.precio;
  }
  addProduct(product:Ejemplo){
    const productoNgrx :Product = {
      id: product._id,
      modelo: product.modelo,
      precio:product.precio,
      imagen:product.imagen,
      color:product.color,
      marca:product.marca
    }
     
    let productosGuardados: Ejemplo[]| null= this.localStorageService.get("carrito");
    if(productosGuardados){
      productosGuardados.push(product);
    }else{
      productosGuardados= [];
      productosGuardados.push(product);
    }
    this.localStorageService.set('carrito', productosGuardados);
    this.router.navigate(['cart']);

    this.store.dispatch(addProduct({product:productoNgrx}))
  }
  
}
