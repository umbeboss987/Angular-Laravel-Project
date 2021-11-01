import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import {select, Store} from '@ngrx/store';
import { DeleteCartItem, GetCartItemAction, GetCartTotalAction } from 'src/app/store/actions/cart.actions';
import { selectCartList, selectCartTotal} from 'src/app/store/selectors/cart.selector';
import { CartWithProducts } from 'src/app/model/CartWithProducts';
import { AddOrderAction } from 'src/app/store/actions/order.actions';
import { FormBuilder, FormGroup } from '@angular/forms';
import {AuthService} from 'src/app/auth/auth.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  items? : CartWithProducts[];
  total? : number;
  OrderForm: FormGroup;

  constructor(private store : Store<IAppState>, private fb: FormBuilder) { 
    this.OrderForm = this.fb.group({
      address: "",
      payment_method: ""
    })

    this.store.dispatch(GetCartItemAction());
    this.store.dispatch(GetCartTotalAction());
  }

  ngOnInit(): void {
    this.getCartList();
    this.getSumPriceCart();
  }

  getCartList (){
    this.store.select(selectCartList).subscribe(res => {
      this.items = res;
    });
  }

  getSumPriceCart (){
    this.store.dispatch(GetCartTotalAction());
    this.store.select(selectCartTotal).subscribe(res =>{
      this.total = res;
    });
  }

  addOrder(){
   let order = this.OrderForm.value;
   this.store.dispatch(AddOrderAction({item: order}));
  }


}
