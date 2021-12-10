import { ActivatedRoute } from '@angular/router';
import {createSelector} from '@ngrx/store';
import {ProductsState, IAppState, UserState} from '../state/app.state';
import { RouterStateUrl } from './custom-serializer';
import { selectCurrentRoute, selectRouteParam, selectRouteParams } from './router.selector';

const selectUser = (state: IAppState) => {
    return state.userState;
};
  
export const selectUserResponse = createSelector(
    selectUser,
    (state: UserState) => state.userAuth
  );

  export const selectUserResponseMessage = createSelector(
    selectUser,
    (state: UserState) => state.token
  );


  export const selectUserAuth = createSelector(
    selectUser,
    (state: UserState) => state.user
  );


  export const selectUserLoading = createSelector(
    selectUser,
    (state: UserState) => state.loading
  );

  export const selectSingleUser = createSelector(
    selectUser,
    (state: UserState) => state.singleUser
  );

  export const selectUserImage = createSelector(
    selectUser,
    (state: UserState) => state.userImage
  );