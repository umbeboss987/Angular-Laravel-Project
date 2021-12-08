import { ActivatedRoute } from '@angular/router';
import {createSelector} from '@ngrx/store';
import {CartState, IAppState} from '../state/app.state';
import { RouterStateUrl } from './custom-serializer';
import { selectCurrentRoute, selectRouteParam, selectRouteParams } from './router.selector';

const selectCart = (state: IAppState) => {
    return state.cartState;
};

export const selectCartList  = createSelector(
    selectCart,
    (state: CartState) => {
      return state.cart;
    }
);

export const selectCartTotal  = createSelector(
  selectCart,
  (state: CartState) => {
    return state.total;
  }
);

