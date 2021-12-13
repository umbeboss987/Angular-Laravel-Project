import { Actions, ofType,createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, map , mergeMap, filter, withLatestFrom, tap, catchError, exhaustMap, } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';


import {
  routerNavigationAction,
  ROUTER_NAVIGATION,
} from '@ngrx/router-store';


import {AddCartItemAction, 
  AddCartItemActionFail, 
  AddCartItemActionSuccess, 
  CartActionsType, 
  DeleteCartItemAction, 
  DeleteCartItemActionFail, 
  DeleteCartItemActionSuccess, 
  GetCartItemAction, 
  GetCartItemActionFail, 
  GetCartItemActionSuccess,  
  GetCartTotalAction, 
  GetCartTotalActionFail, 
  GetCartTotalActionSuccess } from '../actions/cart.actions'
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Injectable ()

export class CartEffects {
    constructor(private actions$ : Actions, private cart_service: CartService,  private toastr: ToastrService,private router: Router){}
    
   
   addCartItem$ = createEffect(() => {
     return this.actions$.pipe(
       ofType(AddCartItemAction),
       switchMap((action) => {
         return this.cart_service.addCartItem(action.item).pipe(
           tap(action=>{
             this.toastr.info("item added to your cart")
             this.router.navigate(['/cart']);
           }),
           map((data) => AddCartItemActionSuccess({ item: action.item })),           
           catchError((err) => { 
             return of(AddCartItemActionFail({item : err.error.message})).pipe(
              tap(action =>{
                this.toastr.error(err.error.message);
              })

             )
           })    
         )
       })
     )
   });

  getCartItem$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetCartItemAction),
      switchMap(() => {
        return this.cart_service.getAllCartItems().pipe(
          map((data) => {
            return GetCartItemActionSuccess({ item: data});
          }), catchError (error => {
            return of(GetCartItemActionFail({message: error.error.message}))
          })
        );
      })
    );
  });

  deleteCartItem$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(DeleteCartItemAction),
      switchMap((action) => {
        return this.cart_service.deleteCartItem(action.id).pipe(
          tap(action =>{
            this.toastr.info('item deleted');
          }),
          map((data) => {
            return DeleteCartItemActionSuccess({ id: action.id});
          }), catchError(errorResp =>{
            return of(DeleteCartItemActionFail({message: errorResp.error.message})).pipe(
              tap(action =>{
                this.toastr.error(errorResp.error.message);
              })
            )
          })
        );
      })
    );
  });

  getSumAllProductsCart$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetCartTotalAction),
      switchMap((action) => {
        return this.cart_service.getSumPriceCart().pipe(
          map((data) => {
            return GetCartTotalActionSuccess({ total: data});
          }),
          catchError((errorResp) => {
            return of(GetCartTotalActionFail({message : errorResp.error.message}))
          })
        );
      })
    );
  });



}