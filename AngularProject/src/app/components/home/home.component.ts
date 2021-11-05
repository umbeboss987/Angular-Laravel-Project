import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products';
import {  Router } from '@angular/router';
import {select, Store} from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { Observable } from 'rxjs';
import { selectProductList} from 'src/app/store/selectors/products.selector';
import { GetProductsAction } from 'src/app/store/actions/products.actions';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products$? : Observable<Products[]>;;

  constructor(private router: Router, private store: Store<IAppState>) {
    this.products$ = this.store.select<Products[]>(selectProductList);
    this.store.dispatch( GetProductsAction());
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
