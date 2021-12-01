import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      name : ["",[Validators.required, Validators.minLength(3), Validators.maxLength(14), Validators.pattern(/^[a-z ,.'-]+$/i)]],
      surname : ["",[Validators.required, Validators.minLength(3), Validators.maxLength(14), Validators.pattern(/^[a-z ,.'-]+$/i)]],
      address: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      telephone_number: ["",[Validators.required, Validators.minLength(8), Validators.maxLength(12), Validators.pattern("^[0-9]*$")]],
      city: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(9), Validators.pattern(/^[a-z ,.'-]+$/i)]],
      postal_code: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(6), Validators.pattern("^[0-9]*$")]]
    })

    this.store.dispatch(GetAddressAction());
    this.addresses = this.store.select(selectAddress);
   }


  ngOnInit(): void {
  }

  createAddress (){
    if(this.formAddress.valid){
      let address = this.formAddress.value;
      this.store.dispatch(CreateAddressAction({address : address}));
    }
  }

}
