import {createReducer, on } from '@ngrx/store';
import { AddOrderActionSuccess, GetOrdersListSuccess } from 'src/app/store/actions/order.actions';
import { initialOrderState } from 'src/app/store/state/app.state';

const _orderReducer = createReducer(
    initialOrderState,
    on(AddOrderActionSuccess, (state, action :any) => {
        return {
            ...state,
            orders: [action.item, action.user_id]
        }
    }),
    on(GetOrdersListSuccess, (state, action :any) => {
        return {
            ...state,
            orderAccount: action.orderAccount
        }
    }),

)

export function orderReducer  (state : any , action : any) {
    return _orderReducer(state, action);
};