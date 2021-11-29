import { UserService } from "src/app/services/user.service";
import { Actions, ofType,createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable, of , } from 'rxjs';
import { switchMap, map , mergeMap, filter, withLatestFrom, catchError, tap, exhaustMap } from 'rxjs/operators';
import { Subscription} from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


import {
  routerNavigationAction,
  ROUTER_NAVIGATION,
} from '@ngrx/router-store';
import { DeleteUserAction, DeleteUserActionSuccess, GetAllUserAction, GetAllUserActionFail, GetAllUserActionSuccess, GetUserAction, GetUserActionFail, GetUserActionSuccess, UpdateUserAction, 
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
    
   
  UserSignUp$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserSignUpAction),
      switchMap((action) => {
        return this.user_service.signUp(action.user).pipe(
          tap(action => {
            this.toastr.success("user registered");
          }),
          map((data: any) => UserSignUpActionSuccess({ responseUser: data, user: action.user})),
           catchError((errorResp) => {
             console.log(errorResp);
            return of(UserLoginActionFail({ responseUser: errorResp.error.message })).pipe(
              tap(action => {
                this.toastr.error(errorResp.error.message);
              }),
            )
          })
        )
      })
    );
  });

  
  
  
  UserSignIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserLoginAction),
      switchMap((action) => {
        return this.auth_service.authenticate(action.user).pipe(
          tap(action => {
            this.toastr.success("Logged succesfully");
            localStorage.setItem('token',JSON.stringify(action.token.token));
            this.router.navigate(['/']);
          }),
            map((user:any) => UserLoginActionSuccess({ responseUser: user , user : action.user })),    
            catchError((errorResp) => {
              return of(UserLoginActionFail({ responseUser: errorResp.error.message })).pipe(
                tap(action => {
                  this.toastr.error(errorResp.error.message);
                }),
              )       
            })    
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
              return UpdateUserActionSuccess({ user: action.user });
            }),
          );
      })
    );
  });


  getUser$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetUserAction),
      mergeMap((action) => {
        return this.user_service.getUser().
          pipe(
            map((user :any) => {
              return GetUserActionSuccess({ user: user });
            }),
            catchError((errorResp) => {
              return of(GetUserActionFail({message : errorResp.error.message}))
            })
          );
      })
    );
  });


  getAllUser$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetAllUserAction),
      mergeMap((action) => {
        return this.user_service.getAllUsers().
          pipe(
            map((user :any) => {
              return GetAllUserActionSuccess({ user: user });
            }),
            catchError((errorResp) => {
              return of(GetAllUserActionFail({message : errorResp.error.message}))
            })
          );
      })
    );
  });

  deleteUser$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(DeleteUserAction),
      mergeMap((action) => {
        return this.user_service.deleteUser(action.user_id).
          pipe(
            map((user :any) => {
              return DeleteUserActionSuccess({ id: action.user_id });
            }),
            catchError((errorResp) => {
              return of(GetAllUserActionFail({message : errorResp.error.message}))
            })
          );
      })
    );
  });
}

