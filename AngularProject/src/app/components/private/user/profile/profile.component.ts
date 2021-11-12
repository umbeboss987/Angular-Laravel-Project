import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAppState } from 'src/app/store/state/app.state';
import {select, Store} from '@ngrx/store';
import { createAccountAction, getDetailsAccountAction } from 'src/app/store/actions/account.actions';
import { AuthService } from 'src/app/auth/auth.service';
import { Account } from 'src/app/model/account';
import { GetOrdersList } from 'src/app/store/actions/order.actions';
import { Order } from 'src/app/model/order';
import { _selectOrderAccount, _selectOrderLoading } from 'src/app/store/selectors/order.selector';
import { OrderAccount } from 'src/app/model/orderAccount';
import { GetUserAction, UpdateUserAction } from 'src/app/store/actions/user.actions';
import { User } from 'src/app/model/user';
import { selectAccountList, selectAccountLoading } from 'src/app/store/selectors/account.selector';
import { selectSingleUser, selectUserAuth, selectUserLoading } from 'src/app/store/selectors/user.selector';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formAccount : FormGroup;

  account? : Account[];

  order? : OrderAccount[];

  totalLength?: number;

  user?: User;

  loadingUser?: boolean;

  loadingAccount?: boolean;

  loadingOrder?: boolean;

  constructor(private fb : FormBuilder, private store: Store<IAppState>) { 
   this.formAccount = this.fb.group({
      full_name : "",
      address: "",
      telephone_number: "",      
    })
   
    this.getUser();
    this.getDetailsAccount();
    this.getOrdersList();    
  }

  ngOnInit(): void {

    this.store.select(_selectOrderAccount).subscribe(res =>{
      this.order = res; 
      this.totalLength = res.length;
    });

    this.store.select(selectSingleUser).subscribe(res =>{
      this.user = res; 
    });;

    this.store.select(selectUserLoading).subscribe(res =>{
      this.loadingUser = res;
     });

     this.store.select(_selectOrderLoading).subscribe(res =>{
      this.loadingOrder = res;
     });

     this.store.select(selectAccountLoading).subscribe(res =>{
      this.loadingAccount = res;
     });

     this.store.select(selectAccountList).subscribe(res=>{
      this.account = res;
    })
  }
  
  createAccount (){
    let account = this.formAccount.value;
    this.store.dispatch(createAccountAction({account : account}));
  }

  getDetailsAccount(){
    this.store.dispatch(getDetailsAccountAction());
  }

  getOrdersList(){
    this.store.dispatch(GetOrdersList());
  }

  getUser(){
    this.store.dispatch(GetUserAction());
  }

}
