import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr'
import { provideState, provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { carritoReducer } from './carrito-ngrx/carrito.reducer';




export const appConfig: ApplicationConfig = {
  providers: [
   
    provideStore(),
    provideState({name: 'cartState', reducer: carritoReducer}),
    provideEffects(),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    provideToastr(),
  ],
};
