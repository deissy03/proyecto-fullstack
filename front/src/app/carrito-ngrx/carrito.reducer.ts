import { Action, createReducer, on } from '@ngrx/store';
import { addProduct, deleteProduct } from './carrito.actions';
import { Product } from './product.model';

// const initState: Product[] = [];

// export const carritoReducer = createReducer(
//   initState,
//   on(addProduct, (state, { product }) => [...state, product]),
//   on(deleteProduct, (state, { ProductId }) => state.filter(item => item.id !== ProductId))
// );

export const initialState: Product[] = [];

export const carritoReducer = createReducer(
  initialState,
  on(addProduct, (state, { product }) => [...state, product]),
  on(deleteProduct, (state, { ProductId }) => {
    return state.filter((product) => product.id !== ProductId);
  })

);