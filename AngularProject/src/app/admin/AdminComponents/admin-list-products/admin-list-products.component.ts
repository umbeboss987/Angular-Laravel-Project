import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import {Store} from '@ngrx/store';
import { DeleteSingleProductAction, GetProductsAction, UpdateSingleProductAction } from 'src/app/store/actions/products.actions';
import { Products } from 'src/app/model/products';
import { Observable } from 'rxjs';
import { selectProductList } from 'src/app/store/selectors/products.selector';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-admin-list-products',
  templateUrl: './admin-list-products.component.html',
  styleUrls: ['./admin-list-products.component.css']
})
export class AdminListProductsComponent implements OnInit {
  products? : Observable<Products[]>;
  closeResult = '';
  updateProductForm : FormGroup;

  constructor(private store : Store<IAppState>, private fb : FormBuilder, private product_srvice : ProductsService) { 
    this.products = this.store.select(selectProductList);
    this.updateProductForm = this.fb.group({
      id: [''],
      name: [''],
      price: [''],
      type: [''],
      description : [''],
      photo :  [null]
    })

   
  }

  ngOnInit(): void {
    this.store.dispatch(GetProductsAction())
  }

  deleteProduct(id: number) {
    this.store.dispatch(DeleteSingleProductAction({ product_id: id }))
  }

  setValueForm(product_name: string, product_price: number, product_description: string, type : string, id: number) {
    return this.updateProductForm.patchValue({
      id: id,
      name: product_name,
      price: product_price,
      type: type,
      description: product_description,
      photo : null
    })
  }

  updateProduct(){
  let product_id = this.updateProductForm.get('id')?.value;
  let formUpdateProduct = this.updateProductForm.value;
  this.store.dispatch(UpdateSingleProductAction({ product_id: product_id, product: formUpdateProduct})); 
  }

  


}
