import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAppState } from 'src/app/store/state/app.state';
import {select, Store} from '@ngrx/store';
import { createAccountAction, getDetailsAccountAction } from 'src/app/store/actions/account.actions';
import { AuthService } from 'src/app/auth/auth.service';
import { Account } from 'src/app/model/account';
import { GetOrdersList } from 'src/app/store/actions/order.actions';
import { Order } from 'src/app/model/order';
import { _selectOrderAccount } from 'src/app/store/selectors/order.selector';
import { OrderAccount } from 'src/app/model/orderAccount';
import { UpdateUserAction } from 'src/app/store/actions/user.actions';
import { User } from 'src/app/model/user';
import { selectAccountList } from 'src/app/store/selectors/account.selector';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formAccount : FormGroup;

  account? : Account[];

  order? : OrderAccount[];

  formUpdateUser : FormGroup;

  constructor(private fb : FormBuilder, private store: Store<IAppState>, private authService: AuthService) { 
   this.formAccount = this.fb.group({
      full_name : "",
      address: "",
      telephone_number: "",      
    })

    this.formUpdateUser = this.fb.group({
      email : "",
      password: "",      
    })

    this.getOrdersList();
    this.getDetailsAccount();
  }

  ngOnInit(): void {
  }
  
  createAccount (){
    let account = this.formAccount.value;
    this.store.dispatch(createAccountAction({account : account}));
  }

  getDetailsAccount(){
    this.store.dispatch(getDetailsAccountAction());
    this.store.select(selectAccountList).subscribe(res=>{
      this.account = res;
      console.log(this.account);
    })
  }

  getOrdersList(){
    this.store.dispatch(GetOrdersList());
    this.store.select(_selectOrderAccount).subscribe(res =>{
      this.order = res; 
    });
  }

  userUpdate(){
    let user : User = this.formUpdateUser.value
    this.store.dispatch(UpdateUserAction({ user : user}));
  }
}
