import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import {select, Store} from '@ngrx/store'
import { GetOrders } from 'src/app/store/actions/order.actions';
import {Observable} from 'rxjs/'
import { selectUsersOrders } from 'src/app/store/selectors/order.selector';
import { User } from 'src/app/model/user';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'app-orders-admin',
  templateUrl: './orders-admin.component.html',
  styleUrls: ['./orders-admin.component.css']
})
export class OrdersAdminComponent implements OnInit {

  orders$? : Observable<Order[]>;

  constructor(private store : Store<IAppState>) { 
    this.store.dispatch(GetOrders());
   this.orders$ = this.store.select(selectUsersOrders);
  }

  ngOnInit(): void {
  }

}
