import {Products} from 'src/app/model/products';
import {Action, createAction, props} from '@ngrx/store';


export enum ProductActionsType {
    GET_PRODUCTS = '[PRODUCTS] Get item',
    ALL_PRODUCTS = '[PRODUCTS] All items',
    SINGLE_PRODUCT = '[PRODUCTS] Single',
    GET_SINGLE_PRODUCT ='[PRODUCT] Single Item',
    ADD_CART_ITEM  ='[PRODUCT] Add',
    ADD_CART_ITEM_SUCCESS  ='[PRODUCT] Add success',
    PRODUCTS_TYPE_ACTION = '[PRODUCTS] type action',
    PRODUCTS_TYPE_ACTION_SUCCESS = '[PRODUCTS] type action success'
}


 export const ProductsTypeAction = createAction('PRODUCTS_TYPE_ACTION', props<{type_item: String}>());
 export const ProductsTypeActionSuccess = createAction('PRODUCTS_TYPE_ACTION_SUCCESS', props<{products: Products[]}>());
 export const ProductsTypeActionFail = createAction('PRODUCTS_TYPE_ACTION_FAIL', props<{message: string}>());

 export const GetProductsAction = createAction('GET_PRODUCTS');
 export const GetProductsActionSuccess = createAction('GET_PRODUCTS_SUCCESS', props<{products: Products[]}>());
 export const GetProductsActionFail = createAction('GET_PRODUCTS', props<{message: string}>());

 export const GetSingleProductAction = createAction('SINGLE_PRODUCT', props<{item_id: number}>());
 export const GetSingleProductActionSuccess = createAction('GET_SINGLE_PRODUCT_SUCCESS', props<{products: Products}>());
 export const GetSingleProductActionFail = createAction('GET_SINGLE_PRODUCT_FAIL', props<{message: string}>());

 export const DeleteSingleProductAction = createAction('DELETE_SINGLE_PRODUCT', props<{product_id: number}>());
 export const DeleteSingleProductActionSuccess = createAction('DELETE_SINGLE_PRODUCT_SUCCESS', props<{products: Products}>());
 export const DeleteSingleProductActionFail = createAction('DELETE_SINGLE_PRODUCT_FAIL', props<{message: string}>());

 export const UpdateSingleProductAction = createAction('UPDATE_SINGLE_PRODUCT', props<{product_id: number, product : any}>());
 export const UpdateSingleProductActionSuccess = createAction('UPDATE_SINGLE_PRODUCT_SUCCESS', props<{products: any, product_id : number}>());
 export const UpdateSingleProductActionFail = createAction('UPDATE_SINGLE_PRODUCT_FAIL', props<{message: string}>());