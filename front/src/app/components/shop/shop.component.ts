import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { DataService } from '../../service2/data.service';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';
import { Ejemplo } from '../../model/ejemplo';
import { LocalStorageService } from 'ngx-localstorage'; 

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
  // productos: any[] = [];
  // modelo: string = '';
  // marca: string = '';
  // material: string = '';
  // precio: number = 0;
  // color: string = '';
  // disponibilidad: boolean = true;
  // fechaIngreso: Date = new Date();
  // imagen: File | null = null;
   
  productos:Ejemplo[]=[];
  totalCompra:number=0;
  constructor(
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
    console.log(product);
    let productosGuardados: Ejemplo[]| null= this.localStorageService.get("carrito");
    if(productosGuardados){
      productosGuardados.push(product);
    }else{
      productosGuardados= [];
      productosGuardados.push(product);
    }
    this.localStorageService.set('carrito', productosGuardados);
    this.router.navigate(['cart']);
  }
}
