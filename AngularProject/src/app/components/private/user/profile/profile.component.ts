import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAppState } from 'src/app/store/state/app.state';
import {select, Store} from '@ngrx/store';
import { CreateAddressAction, GetAddressAction } from 'src/app/store/actions/address.actions';
import { Address } from 'src/app/model/Address';
import { _selectOrderAccount, _selectOrderLoading } from 'src/app/store/selectors/order.selector';
import { GetUserAction } from 'src/app/store/actions/user.actions';
import { User } from 'src/app/model/User';
import { selectAddressLoading } from 'src/app/store/selectors/address.selector';
import { selectSingleUser, selectUserLoading } from 'src/app/store/selectors/user.selector';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Observable<User>;

  loadingUser: Observable<boolean>;



  constructor( private store: Store<IAppState>) { 
 
   
    this.getUser();

    this.user = this.store.select(selectSingleUser);

    this.loadingUser= this.store.select(selectUserLoading);  
  }

  ngOnInit(): void {
    
  }
  
  getUser(){
    this.store.dispatch(GetUserAction());
  }

}
