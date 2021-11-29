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


export const AddCartItemAction = createAction('[CART] Add cart item', props<{item: Cart}>())
export const AddCartItemActionSuccess = createAction('[CART] Add cart item success', props<{item: Cart}>())
export const AddCartItemActionFail = createAction('[CART] Add cart item fail', props<{item: Cart}>())


export const GetCartItemAction = createAction('[CART] Get cart item');
export const GetCartItemActionSuccess = createAction('[CART] Get cart item success', props<{item: []}>());
export const GetCartItemActionFail = createAction('[CART] Get cart item Fail',props<{message: string}>())


export const DeleteCartItemAction = createAction('[CART] Delete cart item', props<{id: number}>());
export const DeleteCartItemActionSuccess = createAction('[CART] Delete cart item success', props<{id: number}>());
export const DeleteCartItemActionFail = createAction('[CART] Delete cart item fail', props<{message: string}>());

export const GetCartTotalAction = createAction('[CART] Get cart total count');
export const GetCartTotalActionSuccess = createAction('[CART] Get cart total count success', props<{total: number}>());
export const GetCartTotalActionFail = createAction('[CART] Get cart total count fail', props<{message: string}>());


export const Cart_Action = AddCartItemActionSuccess;