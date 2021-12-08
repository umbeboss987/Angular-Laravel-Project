import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Order } from '../model/Order';
import { AppConstants } from '../app.constants';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  addOrder(order: Order): Observable<Order>{
    return this.http.post<Order>(`${AppConstants.SERVICES_BASE_URL}/user/orders`,order);
  }

  getOrdersList(): Observable<Order[]>{
    return this.http.get<Order[]>(`${AppConstants.SERVICES_BASE_URL}/user/orders`);
  }

  getAllOrders (): Observable<Order[]>{
    return this.http.get<Order[]>(`${AppConstants.SERVICES_BASE_URL}/orders`);
  }
}
