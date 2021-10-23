import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import {select, Store} from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { Observable } from 'rxjs';
import { selectProductList} from 'src/app/store/selectors/products.selector';
import { GetProductsAction, ShowAllProductsAction } from 'src/app/store/actions/products.actions';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';
 


  constructor(private authService: AuthService, private products_service: ProductsService){
   
  }

  isLoggedIn (){
    return this.authService.isAuthenticated();
  }

  logout(){
    this.authService.logout();
  }

  getProductsType(type: string){
    this.products_service.getProductsType(type);
  }
}
