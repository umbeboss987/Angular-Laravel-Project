import { RouterReducerState } from '@ngrx/router-store';
import {Products} from 'src/app/model/products';
import {Order} from 'src/app/model/order';
import {Cart} from 'src/app/model/cart';
import { User } from 'src/app/model/user';
import { Account } from 'src/app/model/account';
import { UserAuth } from 'src/app/model/userAuth';
import { CartWithProducts } from 'src/app/model/CartWithProducts';
import { OrderAccount } from 'src/app/model/orderAccount';


export interface IAppState{
    productsState : ProductsState;
    cartState : CartState;
    routerReducer: RouterReducerState;
    userState: UserState
    orderState: OrderState;
    accountState: AccountState;
    responseState : ResponseState;
}

export interface ProductsState {
    products: Products[];
    message: string;
    loading : boolean;
}

export const initialProductsState :ProductsState = {
    products: [],
    message: '',
    loading: false,
}

export interface CartState {
    cart: Cart[];
    cartWithProducts : CartWithProducts[];
    message: any;
    total: number;
    loading: boolean;

}

export const initialCartState :CartState = {
    cart: [],
    cartWithProducts : [],
    message: null,
    total : 0,
    loading: false
}


export interface UserState{
    user: User[];
    userAuth: UserAuth[];
    token: string
    loading: boolean;
}

export const initialUserState :UserState = {
    user: [],
    userAuth: [],
    token: '',
    loading: false
}

export interface OrderState {
    orders: Order[];
    orderAccount: OrderAccount[];
    loading: boolean;
}

export const initialOrderState :OrderState = {
    orders: [],
    orderAccount: [],
    loading: false
    
}

export interface AccountState{
    account: Account[];
    loading: boolean;
}

export const initialAccountState :AccountState = {
    account: [],
    loading: false
}

export interface ResponseState{
    responseData : Array<any>;
}

export const initialResponseState : ResponseState = {
   responseData: [],
}