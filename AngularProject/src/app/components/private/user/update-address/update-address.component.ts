import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAppState } from 'src/app/store/state/app.state';
import {select, Store} from '@ngrx/store';
import { selectSingleAddress } from 'src/app/store/selectors/address.selector';
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
      name : ["",[Validators.required, Validators.minLength(3), Validators.maxLength(14), Validators.pattern('^([A-Z][a-z]*((\\s[A-Za-z])?[a-z]*)*)$')]],
      surname : ["",[Validators.required, Validators.minLength(3), Validators.maxLength(14), Validators.pattern(/^[a-z ,.'-]+$/i)]],
      address: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      telephone_number: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(14), Validators.pattern("^[0-9]*$")]],
      city: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(9), Validators.pattern(/^[a-z ,.'-]+$/i)]],
      postal_code: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(6), Validators.pattern("^[0-9]*$")]]
    })
      let id = this.router.snapshot.params['id']
      this.store.dispatch(GetAddressByIdAction({id : id}));
      this.store.select(selectSingleAddress).subscribe(res =>{
      this.address = res;
      if(this.address){
        this.formUpdateAddres.patchValue({
          name: this.address.name,
          surname: this.address.surname,
          telephone_number: this.address.telephone_number,
          address: this.address.address,
          city: this.address.city,
          postal_code: this.address.postal_code,
        })
      }
  
    })
    
  }

  ngOnInit(): void {
   console.log(this.address?.name);
  }

  updateAddress(){
  let id = this.router.snapshot.params['id']
  let updateAddress = this.formUpdateAddres.value;
  this.store.dispatch(UpdateAddressAction({address : updateAddress, address_id : id}));
  }
}
