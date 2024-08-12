import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'ngx-localstorage';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../../app.state';
import { Ejemplo } from '../../model/ejemplo';
import { CommonModule } from '@angular/common';
import { deleteProduct, emptyCart } from '../../carrito-ngrx/carrito.actions';
import { CartState } from '../../carrito-ngrx/carrito.reducer';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let activatedRoute: ActivatedRoute;
  let localStorageService: jasmine.SpyObj<LocalStorageService>;
  let router: jasmine.SpyObj<Router>;
  let toastr: jasmine.SpyObj<ToastrService>;
  let store: jasmine.SpyObj<Store<AppState>>;

  const initialState = {
    cart: {
      products: [] as Ejemplo[],
      grandTotal: 0
    }
  };

  beforeEach(waitForAsync(() => {
    const localStorageSpy = jasmine.createSpyObj('LocalStorageService', ['getProductsFromLocalStorage', 'updateLocalStorage', 'set', 'remove']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const toastrSpy = jasmine.createSpyObj('ToastrService', ['success', 'error']);
    const storeSpy = jasmine.createSpyObj('Store', ['pipe', 'dispatch']);

    TestBed.configureTestingModule({
      imports: [CommonModule, CartComponent], 
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { queryParams: { producto: '1' } } } },
        { provide: LocalStorageService, useValue: localStorageSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ToastrService, useValue: toastrSpy },
        { provide: Store, useValue: storeSpy },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.inject(ActivatedRoute);
    localStorageService = TestBed.inject(LocalStorageService) as jasmine.SpyObj<LocalStorageService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    toastr = TestBed.inject(ToastrService) as jasmine.SpyObj<ToastrService>;
    store = TestBed.inject(Store) as jasmine.SpyObj<Store<AppState>>;
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should add a product to the cart and update local storage', () => {
    const producto: Ejemplo = {
      _id: '1',
      modelo: 'Modelo1',
      marca: 'Marca1',
      material: 'Material1',
      precio: 100,
      color: 'Color1',
      disponibilidad: true,
      fechaIngreso: new Date(),
      imagen: 'imagen1.png',
      createdAt: new Date(),
      updatedAt: new Date()
    };
  
   
    store.pipe.and.returnValue(of({ products: [producto], grandTotal: 0 }));
  
    component.agregarProductoAlCarrito(producto);
  
  
    fixture.detectChanges();
  
    // prueba que el producto se ha añadido a productosSeleccionados
    expect(component.productosSeleccionados).toContain(producto);
  
    // prueba que el localStorageService.set ha sido llamado con los productos actualizados
    expect(localStorageService.set).toHaveBeenCalledWith('carrito', component.productosSeleccionados);
  
    // prueba que totalCompra se ha actualizado correctamente
    expect(component.totalCompra).toBe(0);
  });
});









