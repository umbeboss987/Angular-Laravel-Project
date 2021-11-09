import { Component, OnInit, Input } from '@angular/core';
import { OrderAccount } from 'src/app/model/orderAccount';
import { IAppState } from 'src/app/store/state/app.state';
import {select, Store} from '@ngrx/store';
import { _selectOrderAccount } from 'src/app/store/selectors/order.selector';
import { GetOrdersList } from 'src/app/store/actions/order.actions';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  page: number = 1;

  @Input() order? : OrderAccount [];

  @Input() totalLength?: number;


  constructor(private store: Store<IAppState>) { 
  }

  ngOnInit(): void {
  }


  
}
