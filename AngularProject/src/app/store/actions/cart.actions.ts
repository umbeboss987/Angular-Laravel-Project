import {Action, createAction, props} from '@ngrx/store';
import {Cart} from 'src/app/model/cart';

export enum CartActionsType {
    ADD_CART_ITEM  ='[PRODUCT] Add',
    ADD_CART_ITEM_SUCCESS  ='[PRODUCT] Add success',
    GET_CART_ITEM_ACTION = ' [PRODUCT] cart item',
    GET_CART_ITEM_ACTION_SUCCESS = ' [PRODUCT] cart item success',
    GET_CART_TOTAL_ACTION = '[PRODUCT] cart total price',
    GET_CART_TOTAL_ACTION_SUCCESS = '[PRODUCT] cart total price success',
}


export const AddCartItemAction = createAction('ADD_CART_ITEM', props<{item: Cart, id:number}>())

export const AddCartItemActionSuccess = createAction('ADD_CART_ITEM_SUCCESS', props<{item: Cart, id : number}>())

export const GetCartItemAction = createAction('GET_CART_ITEM_ACTION');

export const GetCartItemActionSuccess = createAction('GET_CART_ITEM_ACTION_SUCCESS', props<{item: []}>());

export const DeleteCartItem = createAction('DELETE_CART_ITEM_ACTION', props<{id: number}>());

export const DeleteCartItemSuccess = createAction('DELETE_CART_ITEM_ACTION_SUCCESS', props<{item: Cart}>());

export const GetCartTotalAction = createAction('GET_CART_TOTAL_ACTION');

export const GetCartTotalActionSuccess = createAction('GET_CART_TOTAL_ACTION_SUCCESS', props<{total: number}>());


export const Cart_Action = AddCartItemActionSuccess;