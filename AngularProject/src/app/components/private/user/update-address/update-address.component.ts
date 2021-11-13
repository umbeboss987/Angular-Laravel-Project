import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAppState } from 'src/app/store/state/app.state';
import {select, Store} from '@ngrx/store';
import { selectAccountList } from 'src/app/store/selectors/account.selector';
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

  account? : Account[];

  constructor(private fb : FormBuilder, private store: Store<IAppState>) { 
   this.formUpdateAddres = this.fb.group({
      address: '',
      full_name: '',
      telephone_number: '',
    })

    this.store.dispatch(getDetailsAccountAction());
    this.store.select(selectAccountList).subscribe(res =>{
      this.account = res;
    })

    if(this.account){
      this.formUpdateAddres.setValue({
        full_name: this.account[0].full_name,
        telephone_number: this.account[0].telephone_number,
        address: this.account[0].address,
      })
    }

   
    
  }

  ngOnInit(): void {
  }

  updateAddress(){
  let updateAddress = this.formUpdateAddres.value;
  console.log(updateAddress);
  this.store.dispatch(updateAccountAction({account : updateAddress}));
  }
}
