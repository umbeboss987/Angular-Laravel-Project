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
}

export interface ProductsState {
    products: Products[];
    message: any;
}

export const initialProductsState :ProductsState = {
    products: [],
    message: null
}

export interface CartState {
    cart: Cart[];
    cartWithProducts : CartWithProducts[];
    message: any;
    total: number;
}

export const initialCartState :CartState = {
    cart: [],
    cartWithProducts : [],
    message: null,
    total : 0,
}


export interface UserState{
    user: User[];
    userAuth: UserAuth[];
}

export const initialUserState :UserState = {
    user: [],
    userAuth: []
}

export interface OrderState {
    orders: Order[];
    orderAccount: OrderAccount[];
}

export const initialOrderState :OrderState = {
    orders: [],
    orderAccount: []
}

export interface AccountState{
    account: Account[];
}

export const initialAccountState :AccountState = {
    account: []
}