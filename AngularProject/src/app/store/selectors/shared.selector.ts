import { ActivatedRoute } from '@angular/router';
import {createSelector} from '@ngrx/store';
import {ProductsState, IAppState, ResponseState} from '../state/app.state';
import { RouterStateUrl } from './custom-serializer';
import { selectCurrentRoute, selectRouteParam, selectRouteParams } from './router.selector';

const selectShareData = (state: IAppState) => {
    return state.responseState;
};
  
export const selectShareDataResponse = createSelector(
    selectShareData,
    (state: ResponseState) => state.responseData
  );