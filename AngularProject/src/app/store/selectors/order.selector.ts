import { ActivatedRoute } from '@angular/router';
import {createSelector} from '@ngrx/store';
import {OrderState, IAppState} from '../state/app.state';
import { RouterStateUrl } from './custom-serializer';
import { selectCurrentRoute, selectRouteParam, selectRouteParams } from './router.selector';

const selectOrderAccount = (state: IAppState) => {
    return state.orderState;
};
  
export const _selectOrderAccount  = createSelector(
    selectOrderAccount,
    (state: OrderState) => {
      return state.userOrders;
    }
);

export const _selectOrderLoading  = createSelector(
  selectOrderAccount,
  (state: OrderState) => {
    return state.loading;
  }
);

export const selectUsersOrders  = createSelector(
  selectOrderAccount,
  (state: OrderState) => {
    return state.orders;
  }
);
