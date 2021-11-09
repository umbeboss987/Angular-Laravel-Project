import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {select, Store} from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { GetProductsAction, ProductsTypeAction } from 'src/app/store/actions/products.actions';
import { selectProductList} from 'src/app/store/selectors/products.selector';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products?: any ;

  totalLength?: number;

  page: number = 1;

  constructor( private  router: ActivatedRoute, private store : Store<IAppState>) { 
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll()  {
    let endpoint : String = this.router.snapshot.params['type'];
    this.store.dispatch(ProductsTypeAction({type_item : endpoint}));
    return this.store.select(selectProductList).subscribe(res =>{
      this.products = res;
      this.totalLength = res.length;
    })
  }

  ngOnDestroy() {
  }
   
}
