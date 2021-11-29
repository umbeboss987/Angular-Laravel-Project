import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import {select, Store} from '@ngrx/store';
import {  selectProductLoading, selectSingleProduct} from 'src/app/store/selectors/product.selector';
import {  GetSingleProductAction } from 'src/app/store/actions/product.actions';
import { IAppState } from 'src/app/store/state/app.state';
import { Observable, Subscription } from 'rxjs';
import { FormBuilder , Validators, FormGroup} from '@angular/forms';
import { AddCartItemAction } from 'src/app/store/actions/cart.actions';
import { Cart } from 'src/app/model/cart';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product$? : Observable<Product>;
  formGroup : FormGroup;
  loading$? : Observable<Boolean>;

  constructor( private fb: FormBuilder, private store : Store<IAppState> , private router: ActivatedRoute) { 
     //form group insert product in the cart
    this.formGroup = this.fb.group({
      product_id : null,
      quantity: [" ",[Validators.required,Validators.min(1), Validators.max(5)]]    
    });

    this.getSingleProduct();
    this.loading$ = this.store.select<Boolean>(selectProductLoading)    
    this.product$ = this.store.select<Product>(selectSingleProduct);
  }

  ngOnInit(): void {
  }

  addCartItem(product_id: number) {
    this.formGroup.patchValue({product_id : product_id});
    let CartItem: Cart = this.formGroup?.value
    this.store.dispatch(AddCartItemAction({ item: CartItem}));
  }


  getSingleProduct() {
    let id = this.router.snapshot.params['id'];
    this.store.dispatch(GetSingleProductAction({ item_id: id }));
  }

 
  
}
