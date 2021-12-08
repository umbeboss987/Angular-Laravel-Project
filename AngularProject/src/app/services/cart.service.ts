import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router , ActivatedRoute, Params} from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Cart } from '../model/Cart';
import { AppConstants } from '../app.constants';
import { tap } from "rxjs/operators";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

const Url3 = `${AppConstants.SERVICES_BASE_URL}/addCartItem/`;




@Injectable({
    providedIn: 'root'
})

export class CartService {
    
    refreshCart = new Subject <void>();

    constructor(private http: HttpClient){
    }
    
    getRefreshCart(){
        return this.refreshCart;
    }

    addCartItem( item : Cart): Observable<Cart>{ 
        return this.http.post<Cart>(`${AppConstants.SERVICES_BASE_URL}/user/carts`, item);
    }

    getAllCartItems(): Observable<[]>{
        return this.http.get<[]>(`${AppConstants.SERVICES_BASE_URL}/user/carts`);
    }

    deleteCartItem(id : number): Observable<Cart>{
        return this.http.delete<Cart>(`${AppConstants.SERVICES_BASE_URL}/user/carts/${id}`).pipe(tap(() =>{
            this.refreshCart.next();
        })
      )
    }

    getSumPriceCart () : Observable <number>{
        return this.http.get<number>(`${AppConstants.SERVICES_BASE_URL}/sumPriceProducts`)
    }

    getSubTotals () : Observable <[]>{
        return this.http.get<[]>(`${AppConstants.SERVICES_BASE_URL}/subTotals`);
    }

}

