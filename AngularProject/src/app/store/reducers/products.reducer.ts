import {GetProductsAction, GetSingleProductAction, GetSingleProductActionFail, GetSingleProductActionSuccess, ProductsTypeAction, ProductsTypeActionFail, ProductsTypeActionSuccess} from '../actions/products.actions'; 
import { ProductActionsType } from '../actions/products.actions';
import {initialProductsState, ProductsState } from '../state/app.state';
import {createReducer, on } from '@ngrx/store';



const _productsReducer = createReducer(
    initialProductsState,
    on(ProductsTypeAction, (state, action :any) => {
        return {
            ...state,
            loading: false
        }
    }),
    on(ProductsTypeActionSuccess, (state, action :any) => {
        return {
            ...state,
            products: action.products
        }
    }),

    on(ProductsTypeActionFail, (state, action :any) => {
        return {
            ...state,
            message: action.message
        }
    }),


    on(GetProductsAction, (state, action :any) => {
        return {
            ...state,
            products:  action.products
        }
    }),

    on(GetSingleProductActionSuccess, (state, action :any) => {
        return {
            ...state,
            products:action.products,
            loading: true
        }
    }),

    on(GetSingleProductActionFail, (state, action :any) => {
        return {
            ...state,
            message:  action.message
        }
    })
)

export function productsReducer  (state : any, action : any) {
    return _productsReducer(state, action);
};