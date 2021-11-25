import { ActivatedRoute } from '@angular/router';
import {createSelector} from '@ngrx/store';
import {AddressState, IAppState} from '../state/app.state';
import { RouterStateUrl } from './custom-serializer';
import { selectCurrentRoute, selectRouteParam, selectRouteParams } from './router.selector';


const selectAccount = (state: IAppState) => {
    return state.addressState;
};


export const selectSingleAccountAuth = createSelector(
    selectAccount,
    (state: AddressState) => {
      return state.singleAddress;
    }
);


export const selectAccountLoading  = createSelector(
  selectAccount,
  (state: AddressState) => {
    return state.loading;
  }
);



export const selectSingleAccount  = createSelector(
  selectAccount,
  (state: AddressState) => {
    return state.singleAddress;
  }
);