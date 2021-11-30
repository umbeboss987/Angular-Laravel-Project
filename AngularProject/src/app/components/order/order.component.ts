import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import {select, Store} from '@ngrx/store';
import { DeleteCartItemAction, GetCartItemAction, GetCartTotalAction } from 'src/app/store/actions/cart.actions';
import { selectCartList, selectCartTotal} from 'src/app/store/selectors/cart.selector';
import { CartWithProducts } from 'src/app/model/CartWithProducts';
import { AddOrderAction } from 'src/app/store/actions/order.actions';
import {Address} from '../../model/Address';
import{Observable} from 'rxjs';
import { FormBuilder , Validators, FormGroup} from '@angular/forms';
import { CreateAddressAction, GetAddressAction } from 'src/app/store/actions/address.actions';
import { selectAddress, selectAddressLoading, selectSingleAddressAuth } from 'src/app/store/selectors/address.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  items? : CartWithProducts[];
  total? : number;
  orderForm: FormGroup;
  formAddress : FormGroup;
  loadingAddress?: boolean;
  hideNewAddressForm = true;
  hideExistingAddress= false;
  hideCheckExistingAddress= false;
  hideCheckNewAddress = false;
  addresses? : Address[];
  hiddenButton : boolean = false;
  defaultValue? : number;

  constructor(private store : Store<IAppState>, private fb: FormBuilder,private router: Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    }
   
    this.formAddress = this.fb.group({
      name : "",
      surname : "",
      address: "",
      telephone_number: "",      
    })

    this.orderForm = this.fb.group({    
      address_id: ["", Validators.required],
    })

    this.getSumPriceCart();
    this.store.dispatch(GetCartItemAction());
    this.store.dispatch(GetCartTotalAction());
    this.store.dispatch(GetAddressAction());
     this.store.select(selectAddress).subscribe(res => {
       this.addresses = res;
     });

    this.store.select(selectAddressLoading).subscribe(res =>{
      this.loadingAddress = res;
      if(this.loadingAddress == false && this.addresses != undefined){
        if(this.addresses.length <= 0){
          this.hideNewAddressForm = false;
          this.hideExistingAddress = true;
          this.hiddenButton = true;
          this.hideCheckExistingAddress = true;
          this.hideCheckNewAddress = true;
        }
        let firstAddress = this.addresses[this.addresses.length - 1];
        this.orderForm.patchValue({
          address_id : firstAddress.id
        })
      }
    })
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

  addOrder(){
   let order = this.orderForm.value;
   this.store.dispatch(AddOrderAction({item: order}));
  }


  displayNewAddress(){
    this.hideNewAddressForm = false;
    this.hideExistingAddress = true;
    this.hiddenButton = true;
  }

  useAddres(){
    this.hideNewAddressForm = true;
    this.hideExistingAddress = false;
    this.hiddenButton = false;
  }

  addAddress(){
    let newAddress = this.formAddress.value;
    this.store.dispatch(CreateAddressAction({address: newAddress}));
    this.router.navigateByUrl('/checkOut');
  }



}
