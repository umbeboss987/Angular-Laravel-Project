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
        GetProductsActionSuccess,
        DeleteSingleProductAction,
        DeleteSingleProductActionSuccess,
        UpdateSingleProductAction,
        UpdateSingleProductActionSuccess,
        UpdateSingleProductActionFail,
        AddSingleProductAction,
        AddSingleProductActionSuccess,
        AddSingleProductActionFail,
        DeleteSingleProductActionFail,
        GetProductsActionFail} from '../actions/products.actions'
import { IAppState } from '../state/app.state';
import { Router } from '@angular/router';

@Injectable ()

export class ProductsEffect {
    constructor(private actions$ : Actions, private products_service: ProductsService, private store : Store<IAppState>, private router: Router){}
    
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
          return this.products_service.getProductsType(action.type_item).pipe(           
            map((data) => {
              return ProductsTypeActionSuccess({ products: data });
            })
          );
      }),catchError((errorResp) =>{
        return of(ProductsTypeActionFail({message : errorResp.error.message}))
      })
    )
  });


  loadProducts$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetProductsAction),
      switchMap((action) => {
          return this.products_service.getProducts().pipe(           
            map((data) => {
              return GetProductsActionSuccess({ products: data });
            })
          );
      }),catchError((errorResp) =>{
        return of(GetProductsActionFail({message : errorResp.error.message}))
      })
    )
  });

      
 delteSingleProduct$ : Observable<Action> = createEffect(() => {
  return  this.actions$.pipe(
      ofType(DeleteSingleProductAction),
      switchMap((action) =>  this.products_service.deleteProduct(action.product_id).pipe(
        map((product) => DeleteSingleProductActionSuccess({product_id : action.product_id}))       
      )
    ),catchError((errorResp) =>{
      return of(DeleteSingleProductActionFail({message : errorResp.error.message}))
    })
  )   
 }); 

 updateSingleProduct$ : Observable<Action> = createEffect(() => {
  return  this.actions$.pipe(
      ofType(UpdateSingleProductAction),
      switchMap((action) =>  this.products_service.updateProduct(action.product, action.product_id).pipe(      
        map((product, id) => UpdateSingleProductActionSuccess({products : action.product, product_id : action.product_id}))              
      )
    ),catchError((errorResp) =>{
      return of(UpdateSingleProductActionFail({message : errorResp.error.message}))
    })
  )   
 });
 
 addSingleProduct$ : Observable<Action> = createEffect(() => {
  return  this.actions$.pipe(
      ofType(AddSingleProductAction),
      switchMap((action) =>  this.products_service.addProduct(action.product).pipe(      
        map((product) => AddSingleProductActionSuccess({products : product})),
      )             
    ),catchError((errorResp) =>{
      return of(AddSingleProductActionFail({message : errorResp.error.message}))
    })
  )   
 }); 


} 
    