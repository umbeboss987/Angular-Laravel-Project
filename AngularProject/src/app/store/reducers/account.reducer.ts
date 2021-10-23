import {createReducer, on } from '@ngrx/store';
import { createAccountActionSuccess, getDetailsAccountActionSuccess } from '../actions/account.actions';
import { initialAccountState } from '../state/app.state';

const _accountReducer = createReducer(
    initialAccountState,
    on(createAccountActionSuccess, (state, action :any) => {
        return {
            ...state,
            account: action.account
        }
    }),
    on(getDetailsAccountActionSuccess, (state, action :any) => {
        return {
            ...state,
            account: action.account
        }
    }),
)


export function accountReducer  (state : any , action : any) {
    return _accountReducer(state, action);
};