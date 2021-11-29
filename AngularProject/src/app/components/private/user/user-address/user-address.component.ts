import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAppState } from 'src/app/store/state/app.state';
import {select, Store} from '@ngrx/store';
import { CreateAddressAction, GetAddressAction } from 'src/app/store/actions/address.actions';
import {Address} from '../../../../model/Address';
import {Observable} from 'rxjs';
import { selectAddress } from 'src/app/store/selectors/address.selector';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {
  
  formAddress : FormGroup;

  addresses? : Observable<Address[]>

  constructor(private fb : FormBuilder, private store: Store<IAppState>) {
    this.formAddress = this.fb.group({
      name : "",
      surname : "",
      address: "",
      telephone_number: "",      
    })

    this.store.dispatch(GetAddressAction());
    this.addresses = this.store.select(selectAddress);
   }


  ngOnInit(): void {
  }

  createAddress (){
    let address = this.formAddress.value;
    this.store.dispatch(CreateAddressAction({address : address}));
  }

}
