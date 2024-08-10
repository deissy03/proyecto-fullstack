import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { ShopComponent } from './shop.component';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';
import { DataService } from '../../service2/data.service';
import { LocalStorageService } from 'ngx-localstorage';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { Ejemplo } from '../../model/ejemplo';
import { addProduct } from '../../carrito-ngrx/carrito.actions';
import { Product } from '../../carrito-ngrx/product.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;
  let toastrService: jasmine.SpyObj<ToastrService>;
  let loginService: jasmine.SpyObj<LoginService>;
  let dataService: jasmine.SpyObj<DataService>;
  let localStorageService: jasmine.SpyObj<LocalStorageService>;
  let store: jasmine.SpyObj<Store>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(waitForAsync(() => {
    const toastrSpy = jasmine.createSpyObj('ToastrService', ['success']);
    const loginSpy = jasmine.createSpyObj('LoginService', ['validateToken', 'logout']);
    const dataSpy = jasmine.createSpyObj('DataService', ['getDatos']);
    const localStorageSpy = jasmine.createSpyObj('LocalStorageService', ['get', 'set']);
    const storeSpy = jasmine.createSpyObj('Store', ['dispatch']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ShopComponent], 
      providers: [
        { provide: ToastrService, useValue: toastrSpy },
        { provide: LoginService, useValue: loginSpy },
        { provide: DataService, useValue: dataSpy },
        { provide: LocalStorageService, useValue: localStorageSpy },
        { provide: Store, useValue: storeSpy },
        { provide: Router, useValue: routerSpy },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
    toastrService = TestBed.inject(ToastrService) as jasmine.SpyObj<ToastrService>;
    loginService = TestBed.inject(LoginService) as jasmine.SpyObj<LoginService>;
    dataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
    localStorageService = TestBed.inject(LocalStorageService) as jasmine.SpyObj<LocalStorageService>;
    store = TestBed.inject(Store) as jasmine.SpyObj<Store>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  }));
 //prueba la creacion del componente con el toBeTruthy si un valor es verdadero 
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
 // prueba la validación del token e inicialización verifica que el nombre del usuario se configura correctamente y que los productos se cargan
  it('should validate token and set user name on init', waitForAsync(() => {
    const mockTokenResponse = { resultado: 'bien', datos: { name: 'deisy esquivia' } };
    const mockProductos: Ejemplo[] = [
      {
        _id: '1',
        modelo: 'bolso',
        marca: 'Louis Vuiton',
        material: 'cuero',
        precio: 100000,
        color: 'negro',
        disponibilidad: true,
        fechaIngreso: new Date(),
        imagen: 'image.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ];
    
    spyOn(localStorage, 'getItem').and.returnValue('valid-token');
    loginService.validateToken.and.returnValue(of(mockTokenResponse));
    dataService.getDatos.and.returnValue(Promise.resolve(mockProductos));

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.name).toBe('deisy esquivia');
      expect(component.productos.length).toBe(1);
    });
  }));
 
  //prueba de adición de los productos del carrito
  it('should add product to the cart and store it in localStorage', () => {
    const mockProduct: Ejemplo = {
      _id: '1',
      modelo: 'bolso',
      marca: 'Louis Vuitton',
      material: 'Leather',
      precio: 100000,
      color: 'negro',
      disponibilidad: true,
      fechaIngreso: new Date(),
      imagen: 'image.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const mockNgrxProduct: Product = {
      id: '1',
      modelo: 'bolso',
      precio: 100000,
      imagen: 'image.jpg',
      color: 'negro',
      marca: 'Louis Vuitton'
    };

    localStorageService.get.and.returnValue(null);
    
    component.addProduct(mockProduct);

    expect(localStorageService.set).toHaveBeenCalledWith('carrito', [mockProduct]);
    expect(store.dispatch).toHaveBeenCalledWith(addProduct({ product: mockNgrxProduct }));
    expect(router.navigate).toHaveBeenCalledWith(['cart']);
  });

  //prueba de mensaje Toast , verifica que se muestre el mensaje toast de saludo cuando el token es valido 
  it('should show toast message if user is not already greeted', () => {
    spyOn(localStorage, 'getItem').and.callFake((key: string) => {
      if (key === 'token') return 'valid-token';
      if (key === 'yaSeMostro') return null;
      return null;
    });

    const mockTokenResponse = { resultado: 'bien', datos: { name: 'deisy esquivia' } };
    loginService.validateToken.and.returnValue(of(mockTokenResponse));

    fixture.detectChanges();

    expect(toastrService.success).toHaveBeenCalledWith('Hello, deisy esquivia!');
  });

  
});
