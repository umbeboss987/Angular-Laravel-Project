import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import {  ActivatedRoute, Router } from '@angular/router';
import {select, Store} from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { Observable } from 'rxjs';
import { selectProductList} from 'src/app/store/selectors/product.selector';
import { GetProductsAction, ProductsTypeAction } from 'src/app/store/actions/product.actions';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products$? : Observable<Product[]>;;

  constructor(private router: ActivatedRoute, private store: Store<IAppState>) {
    this.products$ = this.store.select<Product[]>(selectProductList);
    this.store.dispatch( GetProductsAction());
   }

  ngOnInit(): void {
  }



  // getAll()  {
  //   let endpoint : String = this.router.snapshot.params['type'];
  //   this.store.dispatch(ProductsTypeAction({type_item : endpoint}));
  //   return this.store.select(selectProductList).subscribe(res =>{
  //     this.products = res;
  //     this.totalLength = res.length;
  //   })
  // }
  

 
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

}
