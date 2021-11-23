import { Component, OnInit, Input } from '@angular/core';
//import { OrderAccount } from 'src/app/model/orderAccount';
import { IAppState } from 'src/app/store/state/app.state';
import {select, Store} from '@ngrx/store';
import { _selectOrderAccount } from 'src/app/store/selectors/order.selector';
import { GetOrdersList } from 'src/app/store/actions/order.actions';
import{Observable} from 'rxjs';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  page: number = 1;

  totalLength? : number;

  orders? : Observable<any[]>;


  constructor(private store: Store<IAppState>) { 
    this.getOrdersList();

  }

  ngOnInit(): void {
    
    this.orders = this.store.select(_selectOrderAccount);
  }



  getOrdersList(){
    this.store.dispatch(GetOrdersList());
  }

  
}
