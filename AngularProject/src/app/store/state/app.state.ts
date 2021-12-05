import { RouterReducerState } from '@ngrx/router-store';
import {Product} from 'src/app/model/Product';
import {Order} from 'src/app/model/order';
import {Cart} from 'src/app/model/cart';
import { User } from 'src/app/model/user';
import { Address } from 'src/app/model/Address';
import { UserAuth } from 'src/app/model/userAuth';
import { CartWithProducts } from 'src/app/model/CartWithProducts';
import { UsersOrders } from 'src/app/model/UsersOrders';
import { Review } from 'src/app/model/Review';


export interface IAppState{
    productsState : ProductsState;
    cartState : CartState;
    routerReducer: RouterReducerState;
    userState: UserState
    orderState: OrderState;
    addressState: AddressState;
    responseState : ResponseState;
    reviewState : ReviewState;
}

export interface ProductsState {
    products: Product[];
    message: string;
    loading : boolean;
    singleProduct : Product;
}

export const initialProductsState :ProductsState = {
    products: [],
    message: '',
    loading: false,
    singleProduct: {
        id: 0,
        name: '',
        description: '',
        price: 0,
        photo: '',
        type: '',
        quantity: 0,
    }
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
    singleUser : User;
}

export const initialUserState :UserState = {
    user: [],
    userAuth: [],
    token: '',
    loading: false,
    singleUser : {
        id: 0,
        username: '',
        password: '',
        email: '',
    }
}

export interface OrderState {
    orders: Order[];
    orderUsers: UsersOrders[]
    loading: boolean;
    userOrders: any[];

}

export const initialOrderState :OrderState = {
    orders: [],
    loading: false,
    orderUsers: [],
    userOrders: [],
}

export interface AddressState{
    address: Address[];
    loading: boolean;
    singleAddress: Address;
}

export const initialAccountState :AddressState = {
    address: [],
    loading: false,
    singleAddress :{
        id: 0,
        user_id: 0,
        city:"",
        postal_code:"",
        name: "",
        address: '',
        surname: '',
        telephone_number: ''
    }
}

export interface ReviewState {
    reviews : Review[];
}

export const initialReviewState : ReviewState = {
    reviews : []
}

export interface ResponseState{
    responseData : Array<any>;
}

export const initialResponseState : ResponseState = {
   responseData: [],
}