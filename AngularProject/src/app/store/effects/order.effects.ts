import { Actions, ofType,createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, map , mergeMap, filter, withLatestFrom, catchError, tap, } from 'rxjs/operators';
import { OrderService } from "src/app/services/order.service";
import { ToastrService } from 'ngx-toastr';

import {
  routerNavigationAction,
  ROUTER_NAVIGATION,
} from '@ngrx/router-store';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { AddOrderAction, AddOrderActionFail, AddOrderActionSuccess, GetOrdersList, GetOrdersListFail, GetOrdersListSuccess,  } from 'src/app/store/actions/order.actions';

@Injectable ()

export class OrderEffects{

  constructor(private order_service: OrderService, private actions$ : Actions, private toastr: ToastrService, private router: Router){}

  AddOrder$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(AddOrderAction),
      switchMap((action) => {
        return this.order_service.addOrder(action.item).pipe(
          tap(()=>{
            this.toastr.success('Order done');
            this.router.navigate(['/account']);
          }),
          map((data) => {
            return AddOrderActionSuccess({ item: data});
          }), catchError(errorResp => {
            return of(AddOrderActionFail({message : errorResp.error.message})).pipe(
              tap(() =>{
                this.toastr.error(errorResp.error.message);
              })
            )
          })
        );
      })
    );
  });

  GetOrdersList$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetOrdersList),
      switchMap(() => {
        return this.order_service.getOrdersList().pipe(
          map((data) => {
            return GetOrdersListSuccess({orderAccount: data});
          }), catchError(errorResp => {
            return of(GetOrdersListFail({message : errorResp.error.message})).pipe(
              tap(() =>{
                this.toastr.error(errorResp.error.message);
              })
            )
          })
        );
      })
    );
  });
}
