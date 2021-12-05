import { ActionReducerMap } from '@ngrx/store';
import { productsReducer } from './product.reducer';
import { cartReducer } from './cart.reducer';
import { userReducer } from './user.reducer';
import { IAppState} from '../state/app.state';
import {  RouterReducerState , routerReducer} from '@ngrx/router-store';
import { orderReducer } from './order.reducer';
import { addressReducer } from './address.reducer';
import { responseReducer } from './response.reducer';
import { reviewReducer } from './review.reducer';



export const appReducers: ActionReducerMap<IAppState, any> = {
    productsState: productsReducer,
    routerReducer: routerReducer,
    cartState: cartReducer,
    userState: userReducer,
    orderState: orderReducer,
    addressState: addressReducer,
    responseState : responseReducer,
    reviewState: reviewReducer
};

