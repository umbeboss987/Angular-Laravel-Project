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
 export const ShowAllProductsAction = createAction('ALL_PRODUCTS');
 export const GetProductsAction = createAction('GET_PRODUCTS', props<{products: Products[]}>());
 export const ShowSingleProductAction = createAction('SINGLE_PRODUCT');
 export const GetSingleProductAction = createAction('GET_SINGLE_PRODUCT', props<{products: Products[]}>());


