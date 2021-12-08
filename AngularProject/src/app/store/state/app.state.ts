import { RouterReducerState } from '@ngrx/router-store';
import {Product} from 'src/app/model/Product';
import {Order} from 'src/app/model/Order';
import {Cart} from 'src/app/model/Cart';
import { User } from 'src/app/model/User';
import { Address } from 'src/app/model/Address';
import { UserAuth } from 'src/app/model/UserAuth';
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
    message: any;
    total: number;
    loading: boolean;

}

export const initialCartState :CartState = {
    cart: [],
    message: null,
    total : 0,
    loading: false
}


export interface UserState{
    user: User[];
    userAuth: UserAuth[];
    token: string
    loading: boolean;
    singleUser: User;
}

export const initialUserState :UserState = {
    user: [],
    userAuth: [],
    token: '',
    loading: false,
    singleUser : {
        'id': 0,
        'username': '',
        'password': '',
        'email': '',
        'role': 0,
        'order' : []
    }
   
}

export interface OrderState {
    orders: Order[];
    loading: boolean;
    userOrders: any[];

}

export const initialOrderState :OrderState = {
    orders: [],
    loading: false,
    userOrders: [],
}

export interface AddressState{
    address: Address[];
    loading: boolean;
    singleAddress : Address;
}

export const initialAccountState :AddressState = {
    address: [],
    loading: false,
    singleAddress:{
        'id': 0,
        'user':{
            'id': 0,
            'username': '',
            'password': '',
            'email': '',
            'role': 0,
            'order' : []
        },
        'city': '',
        'postal_code': '',
        'address': '',
        'name': '',
        'surname': '',
        'telephone_number': ''
    },

}

export interface ReviewState {
    reviews : Review[];
}

export const initialReviewState : ReviewState = {
    reviews : [],
}

export interface ResponseState{
    responseData : Array<any>;
}

export const initialResponseState : ResponseState = {
   responseData: [],
}