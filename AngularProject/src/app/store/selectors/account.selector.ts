import { ActivatedRoute } from '@angular/router';
import {createSelector} from '@ngrx/store';
import {AccountState, IAppState} from '../state/app.state';
import { RouterStateUrl } from './custom-serializer';
import { selectCurrentRoute, selectRouteParam, selectRouteParams } from './router.selector';


const selectAccount = (state: IAppState) => {
    return state.accountState;
};


export const selectSingleAccountAuth = createSelector(
    selectAccount,
    (state: AccountState) => {
      return state.singleAccount;
    }
);


export const selectAccountLoading  = createSelector(
  selectAccount,
  (state: AccountState) => {
    return state.loading;
  }
);



export const selectSingleAccount  = createSelector(
  selectAccount,
  (state: AccountState) => {
    return state.singleAccount;
  }
);