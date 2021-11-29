import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAppState } from 'src/app/store/state/app.state';
import {select, Store} from '@ngrx/store';
import { selectSingleAddress, selectSingleAddressAuth } from 'src/app/store/selectors/address.selector';
import { Address } from 'src/app/model/Address';
import { GetAddressAction, GetAddressByIdAction, UpdateAddressAction } from 'src/app/store/actions/address.actions';
import{Observable} from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {

  formUpdateAddres : FormGroup;

  address? : Address;

  constructor(private fb : FormBuilder, private store: Store<IAppState>, private router: ActivatedRoute) { 
   this.formUpdateAddres = this.fb.group({
      address: '',
      name: '',
      surname:'',
      telephone_number: '',
    })
      let id = this.router.snapshot.params['id']
      this.store.dispatch(GetAddressByIdAction({id : id}));
      this.store.select(selectSingleAddress).subscribe(res =>{
      this.address = res;
    })

    if(this.address){
      this.formUpdateAddres.setValue({
        name: this.address.name,
        surname: this.address.surname,
        telephone_number: this.address.telephone_number,
        address: this.address.address,
      })
    }

   
    
  }

  ngOnInit(): void {
  }

  updateAddress(){
  let updateAddress = this.formUpdateAddres.value;
  this.store.dispatch(UpdateAddressAction({address : updateAddress}));
  }
}
