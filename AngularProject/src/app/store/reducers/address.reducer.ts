import {createReducer, on } from '@ngrx/store';
import { CreateAddressActionSuccess, GetAddressAction, GetAddressActionSuccess, GetAddressByIdActionSuccess, UpdateAddressActionSuccess } from '../actions/address.actions';
import { initialAccountState } from '../state/app.state';

const _accountReducer = createReducer(
    initialAccountState,
    on(CreateAddressActionSuccess, (state, action :any) => {
        let address_id= state.address.length;
        action.address['id'] = address_id + 2;
        let newAddress = {...action.address};
        Object.preventExtensions(action.address);
        return {
            ...state,
            address: [...state.address,newAddress]
        }
    }),
    on(GetAddressAction, (state, action :any) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(GetAddressActionSuccess, (state, action :any) => {
        return {
            ...state,
            //account: action.account,
            loading: false,
            address: action.address
        }
    }),
    on(UpdateAddressActionSuccess, (state, action :any) => {
        return {
            ...state,
            address: action.address,
            loading: false,
            singleAddress: action.address
        }
    }),
    on(GetAddressByIdActionSuccess, (state, action :any) => {
        return {
            ...state,
            loading: false,
            singleAddress: action.address
        }
    }),
)


export function addressReducer  (state : any , action : any) {
    return _accountReducer(state, action);
};