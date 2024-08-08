import { Product } from "./carrito-ngrx/product.model";

export interface AppState {
 readonly cartProducts: Product[];
}