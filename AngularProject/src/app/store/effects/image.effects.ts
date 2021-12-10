import { Actions, ofType,createEffect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, map , catchError, tap, } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { AddImageAction, AddImageActionFail, AddImageActionSuccess } from '../actions/image.actions';


@Injectable ()


export class ImageEffects{

    constructor(private actions$ : Actions, private user_service : UserService){}



    addImage$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
          ofType(AddImageAction),
          switchMap((action) => {
            return this.user_service.addUserPhoto(action.photo).pipe(
              map((data) => {
                return AddImageActionSuccess({ photo: action.photo});
              }), catchError (error => {
                  console.log(error.error.message);
                return of(AddImageActionFail({message: error.error.message}))
              })
            );
          })
        );
      });

}