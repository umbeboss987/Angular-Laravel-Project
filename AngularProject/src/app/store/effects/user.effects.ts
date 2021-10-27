import { UserService } from "src/app/services/user.service";
import { Actions, ofType,createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, map , mergeMap, filter, withLatestFrom, catchError} from 'rxjs/operators';
import { Subscription } from 'rxjs';
import {
  routerNavigationAction,
  ROUTER_NAVIGATION,
} from '@ngrx/router-store';
import { UpdateUserAction, 
         UpdateUserActionSuccess, 
         UserLoginAction, 
         UserLoginActionFail, 
         UserLoginActionSuccess, 
         UserSignUpAction, 
         UserSignUpActionSuccess } from "src/app/store/actions/user.actions";
import { AuthService } from "src/app/auth/auth.service";


@Injectable ()

export class UserEffects {
    constructor(private actions$ : Actions, private user_service: UserService, private auth_service: AuthService){}
    
   
  UserSignUp$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserSignUpAction),
      mergeMap((action) => {
        return this.user_service.signUp(action.user).pipe(
          map((data) => {
            return UserSignUpActionSuccess({ user: data });
          })
        );
      })
    );
  });

  UserSignIn$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserLoginAction),
      switchMap((action) => {
        return this.auth_service.authenticate(action.user).pipe(
            switchMap((user:any) => of(UserLoginActionSuccess({ userAuth: user })))           
          )
      }), catchError((errorResp) => {
        return of(UserLoginActionFail({ message: errorResp.error.message }));
      })
    );
  });

  updateUser$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(UpdateUserAction),
      mergeMap((action) => {
        return this.user_service.updateUser(action.user).
          pipe(
            map((user :any) => {
              return UpdateUserActionSuccess({ user: user });
            }),
          );
      })
    );
  });
}