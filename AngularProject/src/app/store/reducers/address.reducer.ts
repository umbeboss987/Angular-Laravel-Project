import {createReducer, on } from '@ngrx/store';
import { CreateAddressActionSuccess, GetDetailsAddressAction, GetDetailsAddressActionSuccess, UpdateAddressActionSuccess } from '../actions/address.actions';
import { initialAccountState } from '../state/app.state';

const _accountReducer = createReducer(
    initialAccountState,
    on(CreateAddressActionSuccess, (state, action :any) => {
        let account = {...action.account};
        return {
            ...state,
            singleAccount: account
        }
    }),
    on(GetDetailsAddressAction, (state, action :any) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(GetDetailsAddressActionSuccess, (state, action :any) => {
        return {
            ...state,
            //account: action.account,
            loading: false,
            singleAccount: action.account
        }
    }),
    on(UpdateAddressActionSuccess, (state, action :any) => {
        return {
            ...state,
            account: action.account,
            loading: false,
            singleAccount: action.account
        }
    }),
)


export function addressReducer  (state : any , action : any) {
    return _accountReducer(state, action);
};