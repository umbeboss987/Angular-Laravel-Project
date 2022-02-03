import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import {select, Store} from '@ngrx/store';
import {  GetCartItemAction, GetCartTotalAction } from 'src/app/store/actions/cart.actions';
import { selectCartList, selectCartTotal} from 'src/app/store/selectors/cart.selector';
import { AddOrderAction } from 'src/app/store/actions/order.actions';
import {Address} from '../../model/Address';
import{Observable} from 'rxjs';
import { FormBuilder , Validators, FormGroup} from '@angular/forms';
import { CreateAddressAction, GetAddressAction } from 'src/app/store/actions/address.actions';
import { selectAddress, selectAddressLoading } from 'src/app/store/selectors/address.selector';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/Cart';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  items$? : Observable<Cart[]>;
  total$? : Observable<number>;
  loadingAddress?: Observable<boolean>;
  addresses$? : Observable<Address[]>;
  orderForm: FormGroup;
  formAddress : FormGroup;
  hideNewAddressForm = true;
  hideExistingAddress= false;
  hideCheckExistingAddress= false;
  hideCheckNewAddress = false;
  hiddenButton : boolean = false;

  constructor(private store : Store<IAppState>, private fb: FormBuilder,private router: Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    }
   
    this.formAddress = this.fb.group({  
      name : ["",[Validators.required, Validators.minLength(3), Validators.maxLength(14), Validators.pattern(/^[a-z ,.'-]+$/i)]],
      surname : ["",[Validators.required, Validators.minLength(3), Validators.maxLength(14), Validators.pattern(/^[a-z ,.'-]+$/i)]],
      address: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      telephone_number: ["",[Validators.required, Validators.minLength(8), Validators.maxLength(12), Validators.pattern("^[0-9]*$")]],
      city: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(9), Validators.pattern(/^[a-z ,.'-]+$/i)]],
      postal_code: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(6), Validators.pattern("^[0-9]*$")]]  
    })


    this.orderForm = this.fb.group({ 
      address_id: [null,[Validators.required]],
    })

    this.getCartList();
    this.getSumPriceCart();
    this.getUserAddresses();

  }

  ngOnInit(): void {
    this.items$ = this.store.select(selectCartList);
    this.total$ = this.store.select(selectCartTotal);
    this.loadingAddress = this.store.select(selectAddressLoading)
    this.addresses$ = this.store.select(selectAddress);
  }



  getCartList (){
    this.store.dispatch(GetCartItemAction());
  }

  getSumPriceCart (){
    this.store.dispatch(GetCartTotalAction());
  }

  getUserAddresses(){
    this.store.dispatch(GetAddressAction());
  }

  addOrder(){
    if(this.orderForm.valid){
      let order = this.orderForm.value;
      this.store.dispatch(AddOrderAction({item: order}));
    }else{
      window.alert("Insert an  address to purchase");
    }
  }

  addAddress(){
    if(this.formAddress.valid){
      let newAddress = this.formAddress.value;
      this.store.dispatch(CreateAddressAction({address: newAddress}));
      this.router.navigateByUrl('/checkOut');
    } else{
      window.alert("Invalid Address");
    }
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

  



}
