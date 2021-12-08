import {AddCartItemActionSuccess, DeleteCartItemActionSuccess, GetCartItemActionSuccess, GetCartTotalActionSuccess} from '../actions/cart.actions';
import { initialCartState,  } from '../state/app.state';
import {createReducer, on } from '@ngrx/store';
import { Cart } from 'src/app/model/cart';



const _cartReducer = createReducer(
    initialCartState,
    on(AddCartItemActionSuccess, (state : any, action :any) => {
        return {
            ...state,
            cart: action.products,
        }
    }),
    on(GetCartItemActionSuccess, (state : any, action :any) => {
        return {
            ...state,
            cart: action.item,
        }
    }),

    on(GetCartTotalActionSuccess, (state : any, action :any) => {
        return {
            ...state,
            total: action.total,
        }
    }),

    on(DeleteCartItemActionSuccess, (state : any, {id} ) => {
        let items = state.cart.filter((single_item : Cart) => {
            return single_item.id !== id
        });
        let updateTotal = state.cart.filter((single_item : Cart) => {
                return single_item.id == id
        });
        return {
            ...state,
            cart: items,
            total: Math.trunc( state.total - updateTotal[0].sub_total ) ,
        }
    }),

)

export function cartReducer  (state : any , action : any) {
    return _cartReducer(state, action);
};