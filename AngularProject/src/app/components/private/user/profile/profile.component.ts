import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAppState } from 'src/app/store/state/app.state';
import {select, Store} from '@ngrx/store';
import { CreateAddressAction, GetAddressAction } from 'src/app/store/actions/address.actions';
import { Address } from 'src/app/model/Address';
import { _selectOrderAccount, _selectOrderLoading } from 'src/app/store/selectors/order.selector';
import { GetUserAction } from 'src/app/store/actions/user.actions';
import { User } from 'src/app/model/user';
import { selectAddressLoading, selectSingleAddressAuth } from 'src/app/store/selectors/address.selector';
import { selectSingleUser, selectUserLoading } from 'src/app/store/selectors/user.selector';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  address : Observable<Address>;

  user: Observable<User>;

  loadingUser: Observable<boolean>;

  loadingAddress: Observable<boolean>;


  constructor( private store: Store<IAppState>) { 
 
   
    this.getUser();
    this.getAddress();

    this.user = this.store.select(selectSingleUser);

    this.loadingUser= this.store.select(selectUserLoading);
    
    this.loadingAddress =  this.store.select(selectAddressLoading);
   
    this.address = this.store.select(selectSingleAddressAuth);
  }

  ngOnInit(): void {
    
  }
  

  getAddress(){
    this.store.dispatch(GetAddressAction());
  }


  getUser(){
    this.store.dispatch(GetUserAction());
  }

}
