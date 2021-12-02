import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ProductsService } from 'src/app/services/product.service';
import { IAppState } from 'src/app/store/state/app.state';
import {select, Store} from '@ngrx/store';
import { GetProductsAction, ProductsTypeAction } from 'src/app/store/actions/product.actions';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService){
  }
  ngOnInit(): void {
  }


  isLoggedIn (){
    return this.authService.isAuthenticated();
  }

  logout(){
    this.authService.logout();
  }

  isAdmin(){
    return this.authService.isAdmin();
  }


}
