import {createSelector} from '@ngrx/store';
import {AddressState, IAppState} from '../state/app.state';


const selectAccount = (state: IAppState) => {
    return state.addressState;
};


export const selectAddressLoading  = createSelector(
  selectAccount,
  (state: AddressState) => {
    return state.loading;
  }
);



export const selectAddress  = createSelector(
  selectAccount,
  (state: AddressState) => {
    return state.address;
  }
);


export const selectSingleAddress  = createSelector(
  selectAccount,
  (state: AddressState) => {
    return state.singleAddress;
  }
);