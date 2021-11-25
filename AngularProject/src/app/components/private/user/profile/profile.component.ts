import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAppState } from 'src/app/store/state/app.state';
import {select, Store} from '@ngrx/store';
import { CreateAddressAction, GetDetailsAddressAction } from 'src/app/store/actions/address.actions';
import { Address } from 'src/app/model/Address';
import { _selectOrderAccount, _selectOrderLoading } from 'src/app/store/selectors/order.selector';
import { GetUserAction } from 'src/app/store/actions/user.actions';
import { User } from 'src/app/model/user';
import { selectAccountLoading, selectSingleAccountAuth } from 'src/app/store/selectors/account.selector';
import { selectSingleUser, selectUserLoading } from 'src/app/store/selectors/user.selector';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formAccount : FormGroup;

  account : Observable<Address>;

  user: Observable<User>;

  loadingUser: Observable<boolean>;

  loadingAccount: Observable<boolean>;


  constructor(private fb : FormBuilder, private store: Store<IAppState>) { 
   this.formAccount = this.fb.group({
      full_name : "",
      address: "",
      telephone_number: "",      
    })
   
    this.getUser();
    this.getDetailsAccount();

    this.user = this.store.select(selectSingleUser);

    this.loadingUser= this.store.select(selectUserLoading);
    
    this.loadingAccount =  this.store.select(selectAccountLoading);
   
    this.account = this.store.select(selectSingleAccountAuth);
  }

  ngOnInit(): void {
    
  }
  
  createAccount (){
    let account = this.formAccount.value;
    this.store.dispatch(CreateAddressAction({account : account}));
  }

  getDetailsAccount(){
    this.store.dispatch(GetDetailsAddressAction());
  }


  getUser(){
    this.store.dispatch(GetUserAction());
  }

}
