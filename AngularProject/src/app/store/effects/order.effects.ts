import { Actions, ofType,createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, map ,  catchError, tap, } from 'rxjs/operators';
import { OrderService } from "src/app/services/order.service";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AddOrderAction, AddOrderActionFail, AddOrderActionSuccess, GetOrders, GetOrdersSuccess, GetUserOrdersSuccess, GetUserOrdersFail, GetUserOrders, GetOrdersFail, DeleteOrderAction, DeleteOrderActionSuccess, DeleteOrderActionFail,  } from 'src/app/store/actions/order.actions';

@Injectable ()

export class OrderEffects{

  constructor(private order_service: OrderService, private actions$ : Actions, private toastr: ToastrService, private router: Router){}

  addOrder$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(AddOrderAction),
      switchMap((action) => {
        return this.order_service.addOrder(action.item).pipe(
          tap(()=>{
            this.toastr.success('Order done');
            this.router.navigate(['/account/orders']);
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

  getUserOrders$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetUserOrders),
      switchMap(() => {
        return this.order_service.getOrdersList().pipe(
          map((data) => {
            return GetUserOrdersSuccess({userOrders: data});
          }), catchError(errorResp => {
            return of(GetUserOrdersFail({message : errorResp.error.message})).pipe(
              tap(() =>{
                this.toastr.error(errorResp.error.message);
              })
            )
          })
        );
      })
    );
  });

  getAllOrders$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetOrders),
      switchMap(() => {
        return this.order_service.getAllOrders().pipe(
          map((data) => {
            return GetOrdersSuccess({orderAccounts: data});
          }), catchError(errorResp => {
            return of(GetOrdersFail({message : errorResp.error.message})).pipe(
              tap(() =>{
                this.toastr.error(errorResp.error.message);
              })
            )
          })
        );
      })
    );
  });


    deleteOrder$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(DeleteOrderAction),
      switchMap((action) => {
        return this.order_service.deleteOrder(action.order_id).pipe(
          map((data) => {
            return DeleteOrderActionSuccess({order_id: action.order_id});
          }), catchError(errorResp => {
            return of(DeleteOrderActionFail({message : errorResp.error.message})).pipe(
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
