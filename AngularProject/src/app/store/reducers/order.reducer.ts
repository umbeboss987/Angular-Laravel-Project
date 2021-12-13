import {createReducer, on } from '@ngrx/store';
import { AddOrderActionSuccess, DeleteOrderActionSuccess, GetOrdersSuccess,GetUserOrders, GetUserOrdersSuccess } from 'src/app/store/actions/order.actions';
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
            orders: action.userOrders,
            loading: false
        }
    }),
    on(GetOrdersSuccess, (state, action :any) => {
        return {
            ...state,
            orders: action.orderAccounts,
            loading: false
        }
    }),
    on(DeleteOrderActionSuccess, (state, action :any) => {
        let newOrders = state.orders.filter(order =>{
           return order.id !=  action.order_id
        })
        return {
            ...state,
            orders: newOrders,
            loading: false
        }
    }),

)

export function orderReducer  (state : any , action : any) {
    return _orderReducer(state, action);
};