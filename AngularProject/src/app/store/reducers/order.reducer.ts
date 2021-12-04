import {createReducer, on } from '@ngrx/store';
import { AddOrderActionSuccess, GetOrdersSuccess,GetUserOrders, GetUserOrdersSuccess } from 'src/app/store/actions/order.actions';
import { initialOrderState } from 'src/app/store/state/app.state';

const _orderReducer = createReducer(
    initialOrderState,
    on(AddOrderActionSuccess, (state, action :any) => {
        return {
            ...state,
            orders: [action.item, action.user_id]
        }
    }),
    on(GetUserOrders, (state, action :any) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(GetUserOrdersSuccess, (state, action :any) => {
        return {
            ...state,
            userOrders: action.userOrders,
            loading: false
        }
    }),
    on(GetOrdersSuccess, (state, action :any) => {
        return {
            ...state,
            orderUsers: action.orderAccounts,
            loading: false
        }
    }),

)

export function orderReducer  (state : any , action : any) {
    return _orderReducer(state, action);
};