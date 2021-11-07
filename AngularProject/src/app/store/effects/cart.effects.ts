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
  DeleteCartItem, 
  DeleteCartItemFail, 
  DeleteCartItemSuccess, 
  GetCartItemAction, 
  GetCartItemActionFail, 
  GetCartItemActionSuccess,  
  GetCartTotalAction, 
  GetCartTotalActionSuccess } from '../actions/cart.actions'
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Injectable ()

export class CartEffects {
    constructor(private actions$ : Actions, private cart_service: CartService,  private toastr: ToastrService,private router: Router){}
    
   
   AddCartItem$ = createEffect(() => {
     return this.actions$.pipe(
       ofType(AddCartItemAction),
       switchMap((action) => {
         return this.cart_service.addCartItem(action.item, action.id).pipe(
           tap(action=>{
             this.toastr.info("item added to your cart")
             this.router.navigate(['/cart']);
           }),
           map((data) => AddCartItemActionSuccess({ item: data })),           
           catchError((err) => { 
             return of(AddCartItemActionFail({item : err.error.message})).pipe(
              tap(action =>{
                this.router.navigate(['/signIn']);
                this.toastr.error(err.error.message);
              })

             )
           })    
         )
       })
     )
   });

  GetCartItem$: Observable<Action> = createEffect(() => {
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

  DeleteCartItem$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(DeleteCartItem),
      switchMap((action) => {
        return this.cart_service.DeleteCartItem(action.id).pipe(
          tap(action =>{
            this.toastr.info('item deleted');
          }),
          map((data) => {
            return DeleteCartItemSuccess({ id: action.id});
          }), catchError(errorResp =>{
            return of(DeleteCartItemFail({message: errorResp.error.message}))
          })
        );
      })
    );
  });

  GetSumAllProductsCart$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetCartTotalAction),
      switchMap((action) => {
        return this.cart_service.getSumPriceCart().pipe(
          map((data) => {
            return GetCartTotalActionSuccess({ total: data});
          })
        );
      })
    );
  });



}