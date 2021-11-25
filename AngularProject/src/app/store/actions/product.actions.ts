import {Product} from 'src/app/model/Product';
import {Action, createAction, props, union} from '@ngrx/store';


export enum ProductActionsType {
    GET_PRODUCTS = '[PRODUCT] Get Products',
    GET_PRODUCTS_SUCCESS = '[PRODUCT] Get Products Success',
    GET_PRODUCTS_FAIL = '[PRODUCT] Get Products Fail',

    GET_SINGLE_PRODUCT = '[PRODUCT] Get Single Product',
    GET_SINGLE_PRODUCT_SUCCESS = '[PRODUCT] Get Single Product Success',
    GET_SINGLE_PRODUCT_FAIL = '[PRODUCT] Get Single Product Fail',

    ADD_CART_ITEM  ='[PRODUCT] Add Single Product',
    ADD_CART_ITEM_SUCCESS  ='[PRODUCT] Add Single Product Success',
    ADD_CART_ITEM_FAIL  ='[PRODUCT] Add Single Product Fail',

    GET_PRODUCTS_TYPE = '[PRODUCT] Get Products Type Action',
    GET_PRODUCTS_TYPE_SUCCESS = '[PRODUCT] Get Products Type Action Success',
    GET_PRODUCTS_TYPE_FAIL = '[PRODUCT] Get Products Type Action Fail',

}

 export const ProductsTypeAction = createAction('[PRODUCT] Get Products Type Action', props<{type_item: String}>());
 export const ProductsTypeActionSuccess = createAction('[PRODUCT] Get Products Type Action Success', props<{products: Product[]}>());
 export const ProductsTypeActionFail = createAction('[PRODUCT] Get Products Type Action Fail', props<{message: string}>());

 export const GetProductsAction = createAction('[PRODUCT] Get Products');
 export const GetProductsActionSuccess = createAction('[PRODUCT] Get Products Success', props<{products: Product[]}>());
 export const GetProductsActionFail = createAction('[PRODUCT] Get Products Fail', props<{message: string}>());

 export const GetSingleProductAction = createAction('[PRODUCT] Get Single Product', props<{item_id: number}>());
 export const GetSingleProductActionSuccess = createAction('[PRODUCT] Get Single Product Success', props<{products: Product}>());
 export const GetSingleProductActionFail = createAction('[PRODUCT] Get Single Product Fail', props<{message: string}>());

 export const DeleteSingleProductAction = createAction('[PRODUCT] Delete Single Product', props<{product_id: number}>());
 export const DeleteSingleProductActionSuccess = createAction('[PRODUCT] Delete Single product Success', props<{product_id: number}>());
 export const DeleteSingleProductActionFail = createAction('[PRODUCT] Delete Single Product Fail', props<{message: string}>());

 export const UpdateSingleProductAction = createAction('[PRODUCT] Update Single Product', props<{product_id: number, product : any}>());
 export const UpdateSingleProductActionSuccess = createAction('[PRODUCT] Update Single product Success', props<{products: any, product_id : number}>());
 export const UpdateSingleProductActionFail = createAction('[PRODUCT]Update Single product Fail', props<{message: string}>());

 export const AddSingleProductAction = createAction('[PRODUCT] Add Single Product', props<{ product : Product}>());
 export const AddSingleProductActionSuccess = createAction('[PRODUCT] Add Single product Success', props<{products: Product}>());
 export const AddSingleProductActionFail = createAction('[PRODUCT] Add single Prduct Fail', props<{message: string}>());
