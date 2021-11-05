import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';
import {select, Store} from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { Observable } from 'rxjs';
import { GetProductsAction, ProductsTypeAction } from 'src/app/store/actions/products.actions';
import {selectProductById, selectProductList} from 'src/app/store/selectors/products.selector';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = [];

  totalLength?: number;

  page: number = 1;

  constructor( private  router: ActivatedRoute, private store : Store<IAppState>) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll()  {
    let endpoint : String = this.router.snapshot.params['type'];
    if (endpoint != undefined){
      this.store.dispatch(ProductsTypeAction({type_item : endpoint}));
    } else{
      this.store.dispatch(GetProductsAction());
    }
    return this.store.select(selectProductList).subscribe(res =>{
      this.products = res;
      this.totalLength = res.length;
    })
  }

  ngOnDestroy() {
  }
   
}
