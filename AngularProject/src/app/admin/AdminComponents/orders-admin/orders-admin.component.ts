import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import {select, Store} from '@ngrx/store'
import { GetAllOrders } from 'src/app/store/actions/order.actions';
@Component({
  selector: 'app-orders-admin',
  templateUrl: './orders-admin.component.html',
  styleUrls: ['./orders-admin.component.css']
})
export class OrdersAdminComponent implements OnInit {

  constructor(private store : Store<IAppState>) { 
    this.store.dispatch(GetAllOrders());
  }

  ngOnInit(): void {
  }

}
