import { CartState } from "./carrito-ngrx/carrito.reducer";

export interface AppState {
 readonly cartState: CartState;
}