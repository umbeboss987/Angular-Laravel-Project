import {AddSingleProductActionSuccess, DeleteSingleProductAction, DeleteSingleProductActionSuccess, GetProductsAction, GetProductsActionSuccess, GetSingleProductAction, GetSingleProductActionFail, GetSingleProductActionSuccess, ProductsTypeAction, ProductsTypeActionFail, ProductsTypeActionSuccess, UpdateSingleProductActionSuccess} from '../actions/product.actions'; 
import { ProductActionsType } from '../actions/product.actions';
import {initialProductsState, ProductsState } from '../state/app.state';
import {createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/model/Product';


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
    }),
    on(DeleteSingleProductActionSuccess, (state, action :any) => {
        let updateProducts = state.products.filter((single_item : Product) => {
            return single_item.id !== action.product_id
        });
        return {
            ...state,
            products: updateProducts
        }
    }),
    on(UpdateSingleProductActionSuccess, (state : any, action :any) => {
        let updateProduct = state.products.map((product : any) => {
            return action.product_id === product.id ? action.products : product;
        });
        
        return {
            ...state,
            singleProduct: action.products,
            products: updateProduct
        }
    }),

    on(AddSingleProductActionSuccess, (state : any, action :any) => {
        return {
            ...state,
            singleProduct: action.products,
        }
    }),




)

export function productsReducer  (state : any, action : any) {
    return _productsReducer(state, action);
};