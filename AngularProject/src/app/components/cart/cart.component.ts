import { Component, OnDestroy, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { selectCartList, selectCartTotal} from 'src/app/store/selectors/cart.selector';
import { Cart } from 'src/app/model/cart';
import { DeleteCartItemAction, GetCartItemAction, GetCartTotalAction } from 'src/app/store/actions/cart.actions';
import { CartWithProducts } from 'src/app/model/CartWithProducts';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  item$? : CartWithProducts[]
  total? : number;
  subTotals?: Array<string>;
  subscription? : Subscription;

  constructor(private store: Store<IAppState>, private router: Router) {
   this.store.select(selectCartTotal).subscribe((res) =>{
    this.total = res;
   });
   this.store.dispatch(GetCartItemAction());
   this.getCartList();
  }

  

  ngOnInit(): void {  
  }


  getCartList (){
    this.store.select(selectCartList).subscribe(res => {
      this.item$ = res;
    });
  }
  deleteItem(id : number){
    this.store.dispatch(DeleteCartItemAction({id : id }));
  }

 
}
