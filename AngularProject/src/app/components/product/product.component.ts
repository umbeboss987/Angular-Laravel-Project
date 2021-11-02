import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/model/products';
import { ProductsService } from 'src/app/services/products.service';
import {select, Store} from '@ngrx/store';
import { selectProductList} from 'src/app/store/selectors/products.selector';
import { GetProductsAction, GetSingleProductAction } from 'src/app/store/actions/products.actions';
import { IAppState } from 'src/app/store/state/app.state';
import { Observable } from 'rxjs';
import { FormBuilder , Validators, FormGroup} from '@angular/forms';
import { AddCartItemAction } from 'src/app/store/actions/cart.actions';
import { Cart } from 'src/app/model/cart';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product$? : Products[];
  formGroup : FormGroup;

  constructor( private fb: FormBuilder, private store : Store<IAppState> , private router: ActivatedRoute,private router_navigate: Router) { 
     //form group insert product in the cart
    this.formGroup = this.fb.group({
      insertProduct: "",
      quantity: ""
    })
    this.store.select<Products[]>(selectProductList).subscribe(res => {
      this.product$ = res;
    });
  }

  ngOnInit(): void {
    this.getSingleProduct();
  }

  addCartItem() {
    let CartItem: Cart = this.formGroup?.value
    let id = this.router.snapshot.params['id'];
    this.store.dispatch(AddCartItemAction({ item: CartItem, id: id }));
  }


  getSingleProduct() {
    let id = this.router.snapshot.params['id'];
    this.store.dispatch(GetSingleProductAction({ item_id: id }));
  }

  
}