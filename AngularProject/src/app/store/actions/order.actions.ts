import {Action, createAction, props} from '@ngrx/store';
import {Order} from 'src/app/model/order';

export const AddOrderAction = createAction('[ORDER] Add order', props<{item: Order}>())
export const AddOrderActionSuccess = createAction('[ORDER] Add order success', props<{item: Order}>())
export const AddOrderActionFail = createAction('[ORDER] Add order fail', props<{message: string}>())


export const GetUserOrders = createAction('[ORDER] Get user orders ')
export const GetUserOrdersSuccess = createAction('[ORDER] Get user orders  success', props<{userOrders : Order[]}>())
export const GetUserOrdersFail = createAction('[ORDER] Get user orders  fail', props<{message: string}>())


export const GetOrders = createAction('[ORDER] Get orders')
export const GetOrdersSuccess = createAction('[ORDER] Get orders success', props<{orderAccounts : any[]}>())
export const GetOrdersFail = createAction('[ORDER] Get orders fail', props<{message: string}>())