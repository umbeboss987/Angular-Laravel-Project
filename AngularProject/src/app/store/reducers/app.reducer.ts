import { ActionReducerMap } from '@ngrx/store';
import { productsReducer } from './products.reducer';
import { cartReducer } from './cart.reducer';
import { userReducer } from './user.reducer';
import { IAppState} from '../state/app.state';
import {  RouterReducerState , routerReducer} from '@ngrx/router-store';
import { orderReducer } from './order.reducer';
import { accountReducer } from './account.reducer';



export const appReducers: ActionReducerMap<IAppState, any> = {
    productsState: productsReducer,
    routerReducer: routerReducer,
    cartState: cartReducer,
    userState: userReducer,
    orderState: orderReducer,
    accountState: accountReducer,
};

