import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {select, Store} from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { GetProductsAction, ProductsTypeAction } from 'src/app/store/actions/product.actions';
import { selectProductList} from 'src/app/store/selectors/product.selector';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products?: any ;

  totalLength?: number;

  page: number = 1;

  constructor( private  activate_router: ActivatedRoute,private router: Router, private store : Store<IAppState>) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    }

    if(this.activate_router.snapshot.data.kind == ''){
       this.store.dispatch(GetProductsAction());
    }else{
     let type =  this.activate_router.snapshot.params.type;
       this.store.dispatch(ProductsTypeAction({type_item : type}))
    }  
  }

  ngOnInit(): void {
    this.getAll();
  }

   getAll()  {
     this.store.select(selectProductList).subscribe(res =>{
      this.products = res;
      this.totalLength = res.length;
    })
  }

  ngOnDestroy() {
  }
   
}
