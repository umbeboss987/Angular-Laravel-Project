import { Component, OnInit, Input } from '@angular/core';
//import { OrderAccount } from 'src/app/model/orderAccount';
import { IAppState } from 'src/app/store/state/app.state';
import {select, Store} from '@ngrx/store';
import { selectUsersOrders, _selectOrderAccount, _selectOrderLoading } from 'src/app/store/selectors/order.selector';
import { GetUserOrders } from 'src/app/store/actions/order.actions';
import{Observable} from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddReviewAction } from 'src/app/store/actions/review.actions';
import { Order } from 'src/app/model/Order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  page: number = 1;

  totalLength? : number;

  orders? : Observable<Order[]>;

  formReview : FormGroup;

  loadingOrders? : Observable<boolean>;


  constructor(private store: Store<IAppState>, private fb : FormBuilder) { 

    this.getOrdersList();
    this.orders = this.store.select(selectUsersOrders); 
    this.loadingOrders = this.store.select(_selectOrderLoading);
    

    this.formReview = this.fb.group({
      review : ['', [Validators.required, Validators.minLength(3)]]
    })

  }

  ngOnInit(): void {
  }



  getOrdersList(){
    this.store.dispatch(GetUserOrders());
  }

  addReview(product_id : number){
    if(this.formReview.valid){
      let reviewValue = this.formReview.value;
      this.store.dispatch(AddReviewAction({review : reviewValue, product_id : product_id}));
    }
  }

  
}
