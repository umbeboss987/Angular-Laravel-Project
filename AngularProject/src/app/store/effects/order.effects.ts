import { Actions, ofType,createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, map , mergeMap, filter, withLatestFrom, } from 'rxjs/operators';
import { OrderService } from "src/app/services/order.service";

import {
  routerNavigationAction,
  ROUTER_NAVIGATION,
} from '@ngrx/router-store';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { AddOrderAction, AddOrderActionSuccess, GetOrdersList, GetOrdersListSuccess } from 'src/app/store/actions/order.actions';

@Injectable ()

export class OrderEffects{

  constructor(private order_service: OrderService, private actions$ : Actions){}

  AddOrder$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(AddOrderAction),
      mergeMap((action) => {
        return this.order_service.addOrder(action.item, action.user_id).pipe(
          map((data, id) => {
            return AddOrderActionSuccess({ item: data, user_id: id});
          })
        );
      })
    );
  });

  GetOrdersList$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetOrdersList),
      mergeMap(() => {
        return this.order_service.getOrdersList().pipe(
          map((data) => {
            return GetOrdersListSuccess({orderAccount: data});
          })
        );
      })
    );
  });
}
