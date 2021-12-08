import { Component, OnDestroy, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { selectCartList, selectCartTotal} from 'src/app/store/selectors/cart.selector';
import { Cart } from 'src/app/model/Cart';
import { DeleteCartItemAction, GetCartItemAction, GetCartTotalAction } from 'src/app/store/actions/cart.actions';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  item$? : Observable<Cart[]>;
  total$? : Observable<number>;
  subTotals?: Array<string>;
  subscription? : Subscription;


  constructor(private store: Store<IAppState>, private router: Router) {
   this.getCartList();
   this.getTotal();
  }

  

  ngOnInit(): void {  
    this.total$ = this.store.select(selectCartTotal);
    this.item$ = this.store.select(selectCartList);
  }


  getTotal(){
    this.store.dispatch(GetCartTotalAction())
  }

  getCartList (){
    this.store.dispatch(GetCartItemAction());
  }
  deleteItem(id : number){
    this.store.dispatch(DeleteCartItemAction({id : id }));
  }

 
}
