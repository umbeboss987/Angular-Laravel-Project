import { Actions, ofType,createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, map , mergeMap, filter, withLatestFrom, } from 'rxjs/operators';
import {
  routerNavigationAction,
  ROUTER_NAVIGATION,
} from '@ngrx/router-store';


import {AddCartItemAction, AddCartItemActionSuccess, CartActionsType, DeleteCartItem, DeleteCartItemSuccess, GetCartItemAction, GetCartItemActionSuccess,  GetCartTotalAction, GetCartTotalActionSuccess } from '../actions/cart.actions'
import { CartService } from 'src/app/services/cart.service';

@Injectable ()

export class CartEffects {
    constructor(private actions$ : Actions, private cart_service: CartService){}
    
   
  AddCartItem$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(AddCartItemAction),
      mergeMap((action) => {
        return this.cart_service.addCartItem(action.item, action.id).pipe(
          map((data,id) => {
            return AddCartItemActionSuccess({ item: data, id: id });
          })
        );
      })
    );
  });

  GetCartItem$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetCartItemAction),
      switchMap(() => {
        return this.cart_service.getAllCartItems().pipe(
          map((data) => {
            return GetCartItemActionSuccess({ item: data});
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
          map((data) => {
            return DeleteCartItemSuccess({ item: data});
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