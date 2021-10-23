import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';
import {select, Store} from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { Observable } from 'rxjs';
import { GetProductsAction, ProductsTypeAction, ShowAllProductsAction } from 'src/app/store/actions/products.actions';
import {selectProductById, selectProductList} from 'src/app/store/selectors/products.selector';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products?: Observable<Products[]>;

  constructor(private products_service: ProductsService, private  router: ActivatedRoute, private store : Store<IAppState>) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    let endpoint : String = this.router.snapshot.params['type'];
    if (endpoint != undefined){
      this.store.dispatch(ProductsTypeAction({type_item : endpoint}));
      this.products = this.store.select(selectProductList);
    } else{
      this.store.dispatch(ShowAllProductsAction());
      this.products = this.store.select(selectProductList);
    }
    
  }
   
}
