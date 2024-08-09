import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { CreateComponent } from './create.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginService } from '../../services/login.service';
import { AppState } from '../../app.state';
import { ToastrModule, ToastrService } from 'ngx-toastr';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let store: MockStore<AppState>;

  const initialState: AppState = {
    cartState: { products: [], grandTotal: 0 }
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(), // Configura ToastrModule para pruebas
        CreateComponent // Importa el componente standalone aquí
      ],
      providers: [
        provideMockStore({ initialState }), // Usa provideMockStore para el mock del store
        LoginService // Asegúrate de que LoginService esté proporcionado
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // agregar otras pruebas
});


