import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from '../app.state';  // Ajusta la ruta según tu estructura de carpetas

describe('LoginService', () => {
  let service: LoginService;
  let store: MockStore<AppState>;
  let toastrService: jasmine.SpyObj<ToastrService>;

  beforeEach(() => {
    const toastrSpy = jasmine.createSpyObj('ToastrService', ['success', 'error']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot()  // Configura ToastrModule
      ],
      providers: [
        LoginService,
        { provide: ToastrService, useValue: toastrSpy },
        provideMockStore()
      ]
    });

    service = TestBed.inject(LoginService);
    toastrService = TestBed.inject(ToastrService) as jasmine.SpyObj<ToastrService>;
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Agrega aquí tus pruebas
});






//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

// import { TestBed } from '@angular/core/testing';

// import { LoginService } from './login.service';

// describe('LoginService', () => {
//   let service: LoginService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(LoginService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
