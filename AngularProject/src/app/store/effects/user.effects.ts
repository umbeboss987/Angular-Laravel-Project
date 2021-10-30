import { UserService } from "src/app/services/user.service";
import { Actions, ofType,createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable, of , } from 'rxjs';
import { switchMap, map , mergeMap, filter, withLatestFrom, catchError, tap } from 'rxjs/operators';
import { Subscription} from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


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
         UserSignUpActionFail, 
         UserSignUpActionSuccess } from "src/app/store/actions/user.actions";
import { AuthService } from "src/app/auth/auth.service";


@Injectable ()

export class UserEffects {
    constructor(private actions$ : Actions, private user_service: UserService, private auth_service: AuthService, private toastr: ToastrService, private router: Router){}
    
   
  UserSignUp$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserSignUpAction),
      switchMap((action) => {
        return this.user_service.signUp(action.user).pipe(
          switchMap((data : any) => of(UserSignUpActionSuccess({ responseUser: data })))
            )
        }), catchError((errorResp) => {
        return of(UserSignUpActionFail({ responseUser: errorResp.error.message }));
      })
    );
  });

  
  
  
  UserSignIn$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserLoginAction),
      switchMap((action) => {
        return this.auth_service.authenticate(action.user).pipe(
          tap(action => {
            this.toastr.success("Logged succesfully");
            localStorage.setItem('token',JSON.stringify(action.token));
            this.router.navigate(['/']);
          }),
            switchMap((user:any) => of(UserLoginActionSuccess({ responseUser: user }))),        
          )
      }), catchError((errorResp) => {
        return of(UserLoginActionFail({ responseUser: errorResp.error.message })).pipe(
          tap(action => {
            this.toastr.error(errorResp.error.message);
          }),
        )       
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