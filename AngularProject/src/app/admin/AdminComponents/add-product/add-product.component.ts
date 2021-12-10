import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Store} from '@ngrx/store';
import { AddSingleProductAction } from 'src/app/store/actions/product.actions';
import{IAppState} from 'src/app/store/state/app.state';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm : FormGroup;

  constructor(private fb : FormBuilder, private store: Store<IAppState>) { 
    this.addProductForm = this.fb.group({
      name :['', [Validators.required, Validators.minLength(4)]],
      price :['', [Validators.required, Validators.pattern("^[0-9]+(.[0-9]{0,2})?$")]],
      description :['', [Validators.required, Validators.minLength(4)]],
      photo :['', [Validators.required, Validators.minLength(4)]],
      type :['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  addProduct (){
    if(this.addProductForm.valid){
      let valueForm =  this.addProductForm.value;
      this.store.dispatch(AddSingleProductAction({product : valueForm}));
    }else{
      alert("Form is not valid")
    }
  }

}
