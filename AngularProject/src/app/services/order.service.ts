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

  addOrder(order: Order, user_id: number): Observable<Order>{
    return this.http.post<Order>(`${AppConstants.SERVICES_BASE_URL}/addOrder/${user_id}`,order);
  }

  getOrdersList(): Observable<OrderAccount[]>{
    return this.http.get<OrderAccount[]>(`${AppConstants.SERVICES_BASE_URL}/getOrdersAccount`);
  }
}
