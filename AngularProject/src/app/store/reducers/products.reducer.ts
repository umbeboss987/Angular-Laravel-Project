import {GetProductsAction, GetProductsActionSuccess, GetSingleProductAction, GetSingleProductActionFail, GetSingleProductActionSuccess, ProductsTypeAction, ProductsTypeActionFail, ProductsTypeActionSuccess} from '../actions/products.actions'; 
import { ProductActionsType } from '../actions/products.actions';
import {initialProductsState, ProductsState } from '../state/app.state';
import {createReducer, on } from '@ngrx/store';



const _productsReducer = createReducer(
    initialProductsState,
    on(ProductsTypeAction, (state, action :any) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(ProductsTypeActionSuccess, (state, action :any) => {
        return {
            ...state,
            products: action.products,
            loading: false
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
            loading: true
        }
    }),


    on(GetProductsActionSuccess, (state, action :any) => {
        return {
            ...state,
            products:  action.products,
            loading: false
        }
    }),
    on(GetSingleProductAction, (state, action :any) => {
        return {
            ...state,
            loading: true
        }
    }),

    on(GetSingleProductActionSuccess, (state, action :any) => {
        return {
            ...state,
            singleProduct: action.products,
            loading: false
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