import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import {select, Store} from '@ngrx/store';
import { DeleteCartItemAction, GetCartItemAction, GetCartTotalAction } from 'src/app/store/actions/cart.actions';
import { selectCartList, selectCartTotal} from 'src/app/store/selectors/cart.selector';
import { CartWithProducts } from 'src/app/model/CartWithProducts';
import { AddOrderAction } from 'src/app/store/actions/order.actions';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Address} from '../../model/Address';
import{Observable} from 'rxjs';
import { GetAddressAction } from 'src/app/store/actions/address.actions';
import { selectAddress, selectSingleAddressAuth } from 'src/app/store/selectors/address.selector';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  items? : CartWithProducts[];
  total? : number;
  OrderForm: FormGroup;
  displayNewAddressForm = false;
  useExistingAddress= true;
  addresses? : Address[];

  constructor(private store : Store<IAppState>, private fb: FormBuilder) { 
    this.OrderForm = this.fb.group({
      name:["", []],
      surname:["", []],
      telephone:["",[]],
      address: "",
      total: ""
    })
    this.getSumPriceCart();
    this.store.dispatch(GetCartItemAction());
    this.store.dispatch(GetCartTotalAction());
    this.store.dispatch(GetAddressAction());
     this.store.select(selectAddress).subscribe(res => {
       this.addresses = res;
       if(this.addresses.length <= 0){
        this.displayNewAddressForm = true;
       }
     });



  }

  ngOnInit(): void {
    this.getCartList();
  }



  getCartList (){
    this.store.select(selectCartList).subscribe(res => {
      this.items = res;
    });

  }

  getSumPriceCart (){
    this.store.select(selectCartTotal).subscribe(res =>{
      this.total = res;
    });

   
  }

  addAddress(){
  this.OrderForm.patchValue({
      total : this.total
    })
   let order = this.OrderForm.value;
   this.store.dispatch(AddOrderAction({item: order}));
  }


  displayNewAddress(){
    this.displayNewAddressForm = true;

  }

  useAddres(){
    this.displayNewAddressForm = false;
  }



}
