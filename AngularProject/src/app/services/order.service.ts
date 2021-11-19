import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Order } from '../model/order';
import { AppConstants } from '../app.constants';
import { OrderAccount } from '../model/orderAccount';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  addOrder(order: Order): Observable<Order>{
    return this.http.post<Order>(`${AppConstants.SERVICES_BASE_URL}/auth/addOrder`,order);
  }

  getOrdersList(): Observable<OrderAccount[]>{
    return this.http.get<OrderAccount[]>(`${AppConstants.SERVICES_BASE_URL}/getOrdersAccount`);
  }

  getAllOrders (): Observable<Order[]>{
    return this.http.get<Order[]>(`${AppConstants.SERVICES_BASE_URL}/orders`);
  }
}
