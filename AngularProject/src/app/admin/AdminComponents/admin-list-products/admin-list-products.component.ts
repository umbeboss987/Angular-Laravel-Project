import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import {Store} from '@ngrx/store';
import { DeleteSingleProductAction, GetProductsAction, UpdateSingleProductAction } from 'src/app/store/actions/product.actions';
import { Product } from 'src/app/model/Product';
import { Observable } from 'rxjs';
import { selectProductList } from 'src/app/store/selectors/product.selector';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-admin-list-products',
  templateUrl: './admin-list-products.component.html',
  styleUrls: ['./admin-list-products.component.css']
})
export class AdminListProductsComponent implements OnInit {
  products? : Observable<Product[]>;
  closeResult = '';
  updateProductForm : FormGroup;

  constructor(private store : Store<IAppState>, private fb : FormBuilder) { 
    this.updateProductForm = this.fb.group({
      id: [''],
      name: ['',[Validators.required, Validators.minLength(4)]],
      price: ['',[Validators.required,Validators.pattern("^[0-9]+(.[0-9]{0,2})?$")]],
      type: ['',[Validators.required]],
      description : ['',[Validators.required, Validators.minLength(4)]],
      photo :  ['',[Validators.required]]
    })

    this.store.dispatch(GetProductsAction())   
  }

  ngOnInit(): void {
    this.products = this.store.select(selectProductList);
  }

  deleteProduct(id: number) {
    this.store.dispatch(DeleteSingleProductAction({ product_id: id }))
  }

  setValueForm(product_name: string, product_price: number, product_description: string, type : string, id: number, photo:string) {
    return this.updateProductForm.patchValue({
      id: id,
      name: product_name,
      price: product_price,
      type: type,
      description: product_description,
      photo : photo
    })
  }

  updateProduct(){
    if(this.updateProductForm.valid){
      let product_id = this.updateProductForm.get('id')?.value;
      let formUpdateProduct = this.updateProductForm.value;
      this.store.dispatch(UpdateSingleProductAction({ product_id: product_id, product: formUpdateProduct})); 
    }
  }

  


}
