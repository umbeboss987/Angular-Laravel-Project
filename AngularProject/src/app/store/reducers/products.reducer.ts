import {GetProductsAction, GetSingleProductAction, ProductsTypeAction, ProductsTypeActionSuccess} from '../actions/products.actions'; 
import { ProductActionsType } from '../actions/products.actions';
import {initialProductsState, ProductsState } from '../state/app.state';
import {createReducer, on } from '@ngrx/store';



const _productsReducer = createReducer(
    initialProductsState,
    on(ProductsTypeActionSuccess, (state, action :any) => {
        return {
            ...state,
            products: action.products
        }
    }),

    on(GetProductsAction, (state, action :any) => {
        return {
            ...state,
            products:  action.products
        }
    }),

    on(GetSingleProductAction, (state, action :any) => {
        return {
            ...state,
            products:  action.products
        }
    })
)

export function productsReducer  (state : any, action : any) {
    return _productsReducer(state, action);
};