// import { TestBed, ComponentFixture, waitForAsync  } from '@angular/core/testing';
// import { AppComponent } from './app.component';
// import { Store } from '@ngrx/store';
// import { provideMockStore } from '@ngrx/store/testing'; 
// import { RouterTestingModule } from '@angular/router/testing'; // Si tu componente usa rutas
// import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa esto si tu componente usa HttpClient


// describe('AppComponent', () => { 
//   let component: AppComponent;
//   let fixture: ComponentFixture<AppComponent>;
//   let store: jasmine.SpyObj<Store>;
//   beforeEach(waitForAsync(() => {
//     const storeSpy = jasmine.createSpyObj('Store', ['dispatch', 'select']);

//     TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule,
//         HttpClientTestingModule, // Añade esto si tu componente usa HttpClient
//         AppComponent // Importa el componente standalone aquí
//       ],
//       providers: [
//         provideMockStore({}),
//         { provide: Store, useValue: storeSpy } // Usa el mock del store
//       ]
//     }).compileComponents();

//     fixture = TestBed.createComponent(AppComponent);
//     component = fixture.componentInstance;
//     store = TestBed.inject(Store) as jasmine.SpyObj<Store>;
//   }));

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should render title', () => {
//     fixture.detectChanges(); // llamar a detectChanges para actualizar el DOM
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('h1')?.textContent).toContain('Bolsos Ejecutivos');
//   });
// });


