import { createAction, props } from '@ngrx/store';
import { Product } from './product.model';

export const addProduct = createAction(
  '[Carrito] Add Product',
  props<{ product: Product }>()
);

export const deleteProduct = createAction(
  '[Carrito] Delete Product',
  props<{ ProductId: string }>()
);
























// import { Action, createReducer, on } from '@ngrx/store';
// import { addProduct,deleteProduct } from './carrito.actions';
// import { Product } from './product.model';

// // const initState: Product[] = [];

// // export const carritoReducer = createReducer(
// //   initState,
// //   on(addProduct, (state, { product }) => [...state, product]),
// //   on(deleteProduct, (state, { ProductId }) => state.filter(item => item.id !== ProductId))
// // );
// export interface CarritoState {
//   carrito: Product[];
// }

// export const initialState: CarritoState = {
//   carrito: []
// };

// const _carritoReducer = createReducer(
//   initialState,
//   on(addProduct, (state, { product }) => ({
//     ...state,
//     carrito: [...state.carrito, product]
//   })),
//   on(deleteProduct, (state, { ProductId }) => ({
//     ...state,
//     carrito: state.carrito.filter(item => item.id !== ProductId)
//   }))
// );

// export function carritoReducer(state: CarritoState | undefined, action: Action) {
//   return _carritoReducer(state, action);
// }