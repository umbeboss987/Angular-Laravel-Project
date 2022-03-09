import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import {  ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import {select, Store} from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { Observable } from 'rxjs';
import { selectProductList} from 'src/app/store/selectors/product.selector';
import { GetProductsAction, ProductsTypeAction } from 'src/app/store/actions/product.actions';
import { OwlOptions } from 'ngx-owl-carousel-o';
import jwt_decode from 'jwt-decode';
import { ProductsService } from 'src/app/services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products$ : Observable<Product[]>;
  images : any;

  constructor(private router: ActivatedRoute, private store: Store<IAppState>, private productsService : ProductsService) {
    this.store.dispatch( GetProductsAction());
    this.products$ = this.store.select<Product[]>(selectProductList);

    this.productsService.getIages().subscribe((res)=>{
     this.images = res;
    })  
   }

  ngOnInit(): void {
  }



  

 
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
