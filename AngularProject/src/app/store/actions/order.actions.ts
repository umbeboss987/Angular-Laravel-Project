import {Action, createAction, props} from '@ngrx/store';
import {Order} from 'src/app/model/order';
import { OrderAllAccounts } from 'src/app/model/OrderAllAccounts';

export const AddOrderAction = createAction('[ORDER] Add order', props<{item: Order}>())
export const AddOrderActionSuccess = createAction('[ORDER] Add order success', props<{item: Order}>())
export const AddOrderActionFail = createAction('[ORDER] Add order fail', props<{message: string}>())


export const GetOrdersList = createAction('[ORDER] Get orders list')
export const GetOrdersListSuccess = createAction('[ORDER] Get orders list success', props<{orderAccount : any[]}>())
export const GetOrdersListFail = createAction('[ORDER] Get orders list fail', props<{message: string}>())


export const GetOrders = createAction('[ORDER] Get orders')
export const GetOrdersSuccess = createAction('[ORDER] Get orders success', props<{orderAccounts : any[]}>())
export const GetOrdersFail = createAction('[ORDER] Get orders fail', props<{message: string}>())