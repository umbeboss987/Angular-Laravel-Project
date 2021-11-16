import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import {Store} from '@ngrx/store';
import { DeleteSingleProductAction, GetProductsAction } from 'src/app/store/actions/products.actions';
import { Products } from 'src/app/model/products';
import { Observable } from 'rxjs';
import { selectProductList } from 'src/app/store/selectors/products.selector';

@Component({
  selector: 'app-admin-list-products',
  templateUrl: './admin-list-products.component.html',
  styleUrls: ['./admin-list-products.component.css']
})
export class AdminListProductsComponent implements OnInit {
  products? : Observable<Products[]>;

  constructor(private store : Store<IAppState>) { 
    this.products = this.store.select(selectProductList);
  }

  ngOnInit(): void {
    this.store.dispatch(GetProductsAction())
  }

  deleteProduct(id: number){
    this.store.dispatch(DeleteSingleProductAction({product_id : id}))
  }

}
