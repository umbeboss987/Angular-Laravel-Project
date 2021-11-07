import { Actions, ofType,createEffect } from '@ngrx/effects';
import { Products } from "src/app/model/products";
import { Action, Store } from '@ngrx/store';
import { ProductsService } from "src/app/services/products.service";
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";
import { switchMap, map , mergeMap, filter, withLatestFrom, catchError, exhaustMap, tap, } from 'rxjs/operators';
import {
  RouterNavigatedAction,
  routerNavigationAction,
  ROUTER_NAVIGATION,
} from '@ngrx/router-store';

import {
        GetProductsAction, 
        ProductsTypeActionSuccess, 
        ProductsTypeAction, 
        GetSingleProductActionFail,
        ProductsTypeActionFail,
        GetSingleProductActionSuccess,
        GetSingleProductAction,
        GetProductsActionSuccess} from '../actions/products.actions'
import { IAppState } from '../state/app.state';
import { Router } from '@angular/router';

@Injectable ()

export class ProductsEffect {
    constructor(private actions$ : Actions, private products_service: ProductsService, private store : Store<IAppState>, private router: Router){}

    loadAllProducts$ : Observable<Action> = createEffect(() => {
        return  this.actions$.pipe(
            ofType(GetProductsAction),
            switchMap(() => this.products_service.getAll()),
            map((productsResp: Products[]) =>
               GetProductsActionSuccess({products : productsResp})
            ) 
         );
   });
    
loadSingleProducts$ : Observable<Action> = createEffect(() => {
  return  this.actions$.pipe(
      ofType(GetSingleProductAction),
      switchMap((action) =>  this.products_service.getSingleProduct(action.item_id).pipe(
        map((product) => GetSingleProductActionSuccess({products : product}))       
      )
    ),catchError((errorResp) =>{
      return of(GetSingleProductActionFail({message : errorResp.error.message}))
    })
  )   
}); 


  loadProductsType$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsTypeAction),
      switchMap((action) => {
        if (action.type_item == undefined || action.type_item ==  null) {
          return this.products_service.getAll().pipe(
            map((data) => {              
              return GetProductsActionSuccess({ products: data });
            })
          )
        } else {
          return this.products_service.getProductsType(action.type_item).pipe(
           
            map((data) => {
              return ProductsTypeActionSuccess({ products: data });
            })
          );
        }
      }),catchError((errorResp) =>{
        return of(ProductsTypeActionFail({message : errorResp.error.message}))
      })
    )
  });

} 
    