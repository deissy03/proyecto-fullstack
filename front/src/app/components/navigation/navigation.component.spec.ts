// import { TestBed } from '@angular/core/testing';
// import { provideMockStore, MockStore } from '@ngrx/store/testing';
// import { NavigationComponent } from './navigation.component';
// import { Product } from '../../carrito-ngrx/product.model';

// describe('NavigationComponent', () => {
//   let component: NavigationComponent;
//   let store: MockStore;
//   const initialState = { productos: [] };

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [ NavigationComponent ],
//       providers: [
//         provideMockStore({ initialState })
//       ]
//     }).compileComponents();

//     store = TestBed.inject(MockStore);
//     component = TestBed.createComponent(NavigationComponent).componentInstance;
//   });

//   it('should render title', () => {
//     // Aquí deberías configurar tus pruebas
//   });

//   // Otros tests
// });









import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { NavigationComponent } from './navigation.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from '../../app.state';
import { CommonModule } from '@angular/common';
import { CartState } from '../../carrito-ngrx/carrito.reducer';
import { Product } from '../../carrito-ngrx/product.model';
import { Store } from '@ngrx/store';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let store: MockStore<AppState>; // Asegúrate de que `store` esté correctamente declarado aquí

  const initialState: AppState = {
    cartState: { products: [], grandTotal: 0 } // Asegúrate de incluir todos los campos requeridos por el reducer
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NavigationComponent
      ],
      
      providers: [
        provideMockStore({ initialState }) // Proporciona un mock del Store con el estado inicial
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore<AppState>; // Aquí estamos inyectando `store`

    // Configura un valor inicial para el estado del Store
    const mockProducts: Product[] = [
      { id: '1', modelo: 'XYZ', precio: 100, imagen: 'image.jpg', color: 'Red', marca: 'Brand' }
    ];
    
    store.setState({
      cartState: { products: mockProducts, grandTotal: 100 } // Asegúrate de que esto coincida con AppState
    });

    fixture.detectChanges(); // Dispara la detección de cambios para que el componente se actualice
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    
  
  // Ejemplo de prueba para verificar que los productos en el carrito se muestran correctamente
  it('should display products in the cart', () => {
    fixture.detectChanges();
    const productElements = fixture.nativeElement.querySelectorAll('li');
    expect(productElements.length).toBe(1); // Debería haber un producto en la lista
    expect(productElements[0].textContent).toContain('XYZ');
    expect(productElements[0].textContent).toContain('100');
  });

  // Aquí podrías agregar otras pruebas...
});


