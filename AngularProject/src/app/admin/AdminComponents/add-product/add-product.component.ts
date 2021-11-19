import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Store} from '@ngrx/store';
import { AddSingleProductAction } from 'src/app/store/actions/products.actions';
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
      name :[''],
      price :[''],
      description :[''],
      photo :[''],
      type :[''],
    })
  }

  ngOnInit(): void {
  }

  addProduct (){
    let valueForm =  this.addProductForm.value;
    this.store.dispatch(AddSingleProductAction({product : valueForm}));
  }

}
