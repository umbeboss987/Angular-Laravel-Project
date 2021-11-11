import {createReducer, on } from '@ngrx/store';
import { createAccountActionSuccess, getDetailsAccountAction, getDetailsAccountActionSuccess } from '../actions/account.actions';
import { initialAccountState } from '../state/app.state';

const _accountReducer = createReducer(
    initialAccountState,
    on(createAccountActionSuccess, (state, action :any) => {
        let account = {...action.account};
        return {
            ...state,
            account: [...state.account,account]
        }
    }),
    on(getDetailsAccountAction, (state, action :any) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(getDetailsAccountActionSuccess, (state, action :any) => {
        return {
            ...state,
            account: action.account,
            loading: false
        }
    }),
)


export function accountReducer  (state : any , action : any) {
    return _accountReducer(state, action);
};