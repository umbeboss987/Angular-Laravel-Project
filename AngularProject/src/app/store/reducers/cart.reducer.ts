import {AddCartItemActionSuccess, Cart_Action, DeleteCartItemSuccess, GetCartItemActionSuccess, GetCartTotalActionSuccess} from '../actions/cart.actions';
import { CartActionsType } from '../actions/cart.actions';
import {initialProductsState, ProductsState, initialCartState, CartState } from '../state/app.state';
import {createReducer, on } from '@ngrx/store';
import { CartWithProducts } from 'src/app/model/CartWithProducts';



const _cartReducer = createReducer(
    initialCartState,
    on(AddCartItemActionSuccess, (state, action :any) => {
        return {
            ...state,
            cart: action.products
        }
    }),
    on(GetCartItemActionSuccess, (state : any, action :any) => {
        return {
            ...state.cartWithProducts,
            cartWithProducts: action.item
        }
    }),

    on(DeleteCartItemSuccess, (state : any, action :any) => {
        return {
            ...state,
            cart: action.item
        }
    }),

    on(GetCartTotalActionSuccess, (state : any, action :any) => {
        return {
            ...state,
            total: action.total
        }
    }),

)

export function cartReducer  (state : any , action : any) {
    return _cartReducer(state, action);
};