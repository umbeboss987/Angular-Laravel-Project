import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import {Store} from '@ngrx/store';
import { DeleteSingleProductAction, GetProductsAction, UpdateSingleProductAction } from 'src/app/store/actions/products.actions';
import { Products } from 'src/app/model/products';
import { Observable } from 'rxjs';
import { selectProductList } from 'src/app/store/selectors/products.selector';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-admin-list-products',
  templateUrl: './admin-list-products.component.html',
  styleUrls: ['./admin-list-products.component.css']
})
export class AdminListProductsComponent implements OnInit {
  products? : Observable<Products[]>;
  closeResult = '';
  updateProductForm : FormGroup;

  constructor(private store : Store<IAppState>, private fb : FormBuilder) { 
    this.products = this.store.select(selectProductList);
    this.updateProductForm = this.fb.group({
      name: '',
      price: '',
      type: '',
      description : ''
    })

   
  }

  ngOnInit(): void {
    this.store.dispatch(GetProductsAction())
  }

  deleteProduct(id: number) {
    this.store.dispatch(DeleteSingleProductAction({ product_id: id }))
  }

  setValueForm(product_name: string, product_price: number, product_description: string, type : string) {
    return this.updateProductForm.patchValue({
      name: product_name,
      price: product_price,
      type: type,
      description: product_description
    })
  }

  updateProduct(id : number){
    let product = this.updateProductForm.value;
    this.store.dispatch(UpdateSingleProductAction({ product_id: id, product: product }));
  }




}
