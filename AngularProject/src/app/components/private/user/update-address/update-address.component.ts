import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAppState } from 'src/app/store/state/app.state';
import {select, Store} from '@ngrx/store';
import { selectSingleAccountAuth } from 'src/app/store/selectors/account.selector';
import { Account } from 'src/app/model/account';
import { getDetailsAccountAction, updateAccountAction } from 'src/app/store/actions/account.actions';
import{Observable} from 'rxjs';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {

  formUpdateAddres : FormGroup;

  account? : Account;

  constructor(private fb : FormBuilder, private store: Store<IAppState>) { 
   this.formUpdateAddres = this.fb.group({
      address: '',
      full_name: '',
      telephone_number: '',
    })

    this.store.dispatch(getDetailsAccountAction());
    this.store.select(selectSingleAccountAuth).subscribe(res =>{
      this.account = res;
    })

    if(this.account){
      this.formUpdateAddres.setValue({
        full_name: this.account.full_name,
        telephone_number: this.account.telephone_number,
        address: this.account.address,
      })
    }

   
    
  }

  ngOnInit(): void {
  }

  updateAddress(){
  let updateAddress = this.formUpdateAddres.value;
  this.store.dispatch(updateAccountAction({account : updateAddress}));
  }
}
