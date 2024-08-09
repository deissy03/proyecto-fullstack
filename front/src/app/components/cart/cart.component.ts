import { Component, OnInit } from '@angular/core';
import { Ejemplo } from '../../model/ejemplo';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'ngx-localstorage';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Product } from '../../carrito-ngrx/product.model';
import { deleteProduct, emptyCart } from '../../carrito-ngrx/carrito.actions';
import { CartState } from '../../carrito-ngrx/carrito.reducer';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
 productosSeleccionados:Ejemplo[]=[];
 productsInCart:Product []=[];
 totalCarrito: number=0 ;
 totalCompra:number =0;
 constructor(
  private activatedRoute: ActivatedRoute,
  private localStorageService: LocalStorageService,
  private router: Router,
  private toastr: ToastrService,
  private store: Store <AppState>
 ){}
 getProducts(){
  this.store.pipe(select('cartState')).subscribe((cartState: CartState) => {
    this.productsInCart = cartState.products
    this.totalCarrito = cartState.grandTotal
    console.log(cartState.products)
  })
}
 
// implemnetamos la traida de los datos del modelo con ngOnInit, se crea una constante que se llame idproducto para que reciba los productos por su id y reciba un solo producto
 ngOnInit(){
   const idProducto= this.activatedRoute.snapshot.queryParams["producto"];
   

  //creamos un if que va a traer el id producto que verifica si existe un valor valido en el idproducto este id producto viene del modleo ejemplo que en este caso llammos productoSeleccionado 
   if(idProducto){
    const producto= this.productosSeleccionados.find(
      (p)=>p._id=== idProducto
    );
    //creamos un if si el producto contiene un valor que exista se agrega al carrito con el boton que esta en shop components html
    if(producto){
     this.agregarProductoAlCarrito(producto);
    }
    // el try inteta recuperar los productos guardados del localstorage utilizando el localStorageService
   }try{
    const productosGuardados:Ejemplo[]| null=
    this.localStorageService.get("carrito");
    if(productosGuardados){
      this.productosSeleccionados= productosGuardados;
    this.calcularTotalCompra();

    }
   }catch(error){
    console.log("error al cargar el carrito",error);
   }  
   this.getProducts()
 }
 agregarProductoAlCarrito(producto:Ejemplo){
  this.productosSeleccionados.push(producto);
  try{
    this.localStorageService.set('carrito',this.productosSeleccionados);
   this.calcularTotalCompra();
  }catch(error){
    console.log("error al cargar el carrito",error);
   }  
 }
 eliminarProductoDelCarrito(indice:number){
  this.productosSeleccionados.splice(indice,1);
  try{
    this.localStorageService.set('carrito',this.productosSeleccionados);
   this.calcularTotalCompra();
  }catch(error){
    console.log("error al cargar el carrito",error);
   }  
 }
 vaciarCarrito(){
  this.productosSeleccionados=[];
  try{
    this.localStorageService.remove('carrito');
    this.totalCompra=0;
   
  }catch(error){
    console.log("error al eliminar el carrito",error);
   } 
 }
 agregarCarrito() {
  this.router.navigate(['/shop']);
}
 comprar(){
  this.router.navigate(['/comprar']);
  // this.toastr.success('¡Compra exitosa!', 'BOLSOS_JEZE');
  return this.vaciarCarrito();
 
}
 calcularTotalCompra(){
  this.totalCompra=this.productsInCart.reduce((acomulador,producto)=>acomulador + producto.precio,0);
 }
 removeAProduct(index: number, precio:number){
  this.store.dispatch(deleteProduct({ProductIndex:index, precio}))
  this.getProducts()
}
 vaciarCarro(){
  this.store.dispatch(emptyCart())
 }
 }

