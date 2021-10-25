import { Actions, ofType,createEffect } from '@ngrx/effects';
import { Products } from "src/app/model/products";
import { Action } from '@ngrx/store';
import { ProductsService } from "src/app/services/products.service";
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, map , mergeMap, filter, withLatestFrom, } from 'rxjs/operators';
import {
  RouterNavigatedAction,
  routerNavigationAction,
  ROUTER_NAVIGATION,
} from '@ngrx/router-store';

import {ShowAllProductsAction, GetProductsAction, ProductActionsType, GetSingleProductAction, ShowSingleProductAction, ProductsTypeActionSuccess, ProductsTypeAction} from '../actions/products.actions'

@Injectable ()

export class ProductsEffect {
    constructor(private actions$ : Actions, private products_service: ProductsService){}

    loadAllProducts$ : Observable<Action> = createEffect(() => {
        return  this.actions$.pipe(
            ofType(ShowAllProductsAction),
            switchMap(() => this.products_service.getAll()),
            switchMap((productsResp: Products[]) =>
              of( GetProductsAction({products : productsResp}))
            ) 
         );
   });
    
loadSingleProducts$ : Observable<Action> = createEffect(() => {
  return  this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction) => {
        return r.payload.routerState.url.startsWith('/product')
      }),
      map((r: RouterNavigatedAction) => {
        return r.payload.routerState.root.firstChild?.params['id'];
      }),
      switchMap((id: number) => {
      return this.products_service.getSingleProduct(id).pipe(
        switchMap((product) => of( GetSingleProductAction({products : product})))
      )
    })
  )   
}); 


  loadProductsType$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction) => {
        return r.payload.routerState.url.startsWith('/products')
      }),
      map((r: RouterNavigatedAction) => {
        return r.payload.routerState.root.firstChild?.params['type'];
      }),
      switchMap((type: string) => {
        if (type == undefined) {
          return this.products_service.getAll().pipe(
            map((data) => {
              return GetProductsAction({ products: data });
            })
          )
        } else {
          return this.products_service.getProductsType(type).pipe(
            map((data) => {
              return ProductsTypeActionSuccess({ products: data });
            })
          );
        }
      })
    )
  });

} 
    