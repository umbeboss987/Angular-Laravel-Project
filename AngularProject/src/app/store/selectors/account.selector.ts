import { ActivatedRoute } from '@angular/router';
import {createSelector} from '@ngrx/store';
import {AccountState, IAppState} from '../state/app.state';
import { RouterStateUrl } from './custom-serializer';
import { selectCurrentRoute, selectRouteParam, selectRouteParams } from './router.selector';


const selectAccount = (state: IAppState) => {
    return state.accountState;
};


export const selectAccountList  = createSelector(
    selectAccount,
    (state: AccountState) => {
      return state.account;
    }
);