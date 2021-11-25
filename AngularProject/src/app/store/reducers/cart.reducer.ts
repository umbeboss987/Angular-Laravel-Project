import {AddCartItemActionSuccess, DeleteCartItemSuccess, GetCartItemActionSuccess, GetCartTotalActionSuccess} from '../actions/cart.actions';
import { initialCartState,  } from '../state/app.state';
import {createReducer, on } from '@ngrx/store';
import { CartWithProducts } from 'src/app/model/CartWithProducts';



const _cartReducer = createReducer(
    initialCartState,
    on(AddCartItemActionSuccess, (state : any, action :any) => {
        let newtotal = action.item
        return {
            ...state,
            cart: action.products,
            total: (state.total + newtotal.data.sub_total),
        }
    }),
    on(GetCartItemActionSuccess, (state : any, action :any) => {
        return {
            ...state,
            cartWithProducts: action.item,
        }
    }),

    on(GetCartTotalActionSuccess, (state : any, action :any) => {
        return {
            ...state,
            total: action.total,
        }
    }),

    on(DeleteCartItemSuccess, (state : any, {id} ) => {
        let items = state.cartWithProducts.filter((single_item : CartWithProducts) => {
            return single_item.id !== id
        });
        let updateTotal = state.cartWithProducts.filter((single_item : CartWithProducts) => {
                return single_item.id == id
        });
        return {
            ...state,
            cartWithProducts:  items,
            total: Math.trunc( state.total - updateTotal[0].sub_total ) ,
        }
    }),

)

export function cartReducer  (state : any , action : any) {
    return _cartReducer(state, action);
};