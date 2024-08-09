import { Action, createReducer, on } from '@ngrx/store';
import { addProduct, deleteProduct, emptyCart } from './carrito.actions';
import { Product } from './product.model';


export interface CartState { /* NEW BLOCK */
  products: Product[],
  grandTotal: number
}
export const initialState: CartState = { /* NEW BLOCK */
  products: [],
  grandTotal: 0
}


export const carritoReducer = createReducer(
  initialState,
  on(addProduct, (state, { product }) => ({
    products: [...state.products, product],
    grandTotal: state.grandTotal + product.precio
  })),
  on(deleteProduct, (state, { ProductIndex, precio }) => ({
    products: state.products.filter((product, index) => index !== ProductIndex),
    grandTotal: state.grandTotal - precio
  })),
  on (emptyCart,(state)=>({
    products: [],
    grandTotal:0
  }
   
  ))

);