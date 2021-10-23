import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import {select, Store} from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { Observable } from 'rxjs';
import {selectProductById, selectProductList} from 'src/app/store/selectors/products.selector';
import { GetProductsAction, ShowAllProductsAction } from 'src/app/store/actions/products.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products$? : Observable<Products[]>;;

  constructor(private router: Router, private store: Store<IAppState>) {
    this.products$ = this.store.select<Products[]>(selectProductList);
    this.store.dispatch( ShowAllProductsAction());
   }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
  }


  

}
