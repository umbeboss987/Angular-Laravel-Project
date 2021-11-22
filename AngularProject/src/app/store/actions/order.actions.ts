import {Action, createAction, props} from '@ngrx/store';
import { OrderAccount } from 'src/app/model/orderAccount';
import {Order} from 'src/app/model/order';
import { OrderAllAccounts } from 'src/app/model/OrderAllAccounts';

export const AddOrderAction = createAction('ADD_ORDER_ITEM', props<{item: Order}>())
export const AddOrderActionSuccess = createAction('ADD_ORDER_ITEM_SUCCESS', props<{item: Order}>())
export const AddOrderActionFail = createAction('ADD_ORDER_ITEM_SUCCESS', props<{message: string}>())


export const GetOrdersList = createAction('GET_ORDER_LIST')
export const GetOrdersListSuccess = createAction('GET_ORDER_LIST_SUCCESS', props<{orderAccount : OrderAccount[]}>())
export const GetOrdersListFail = createAction('GET_ORDER_LIST_FAIL', props<{message: string}>())


export const GetAllOrders = createAction('GET_ALL_ORDERS')
export const GetAllOrdersSuccess = createAction('GET_ALL_ORDERS_SUCCESS', props<{orderAccounts : OrderAllAccounts[]}>())
export const GetAllOrdersFail = createAction('GET_ALL_ORDERS_FAIL', props<{message: string}>())