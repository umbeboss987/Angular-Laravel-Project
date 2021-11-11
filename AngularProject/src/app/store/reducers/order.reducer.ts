import {createReducer, on } from '@ngrx/store';
import { AddOrderActionSuccess, GetOrdersList, GetOrdersListSuccess } from 'src/app/store/actions/order.actions';
import { initialOrderState } from 'src/app/store/state/app.state';

const _orderReducer = createReducer(
    initialOrderState,
    on(AddOrderActionSuccess, (state, action :any) => {
        return {
            ...state,
            orders: [action.item, action.user_id]
        }
    }),
    on(GetOrdersList, (state, action :any) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(GetOrdersListSuccess, (state, action :any) => {
        return {
            ...state,
            orderAccount: action.orderAccount,
            loading: false
        }
    }),

)

export function orderReducer  (state : any , action : any) {
    return _orderReducer(state, action);
};