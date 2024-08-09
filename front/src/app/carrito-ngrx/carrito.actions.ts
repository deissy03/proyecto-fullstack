import { createAction, props } from '@ngrx/store';
import { Product } from './product.model';

export const addProduct = createAction(
  '[Carrito] Add Product',
  props<{ product: Product }>()
);

export const deleteProduct = createAction(
  '[Carrito] Delete Product',
  props<{ ProductIndex: number, precio:number }>()
);

export const emptyCart = createAction (
  '[Carrito] Empty Cart ',
)


