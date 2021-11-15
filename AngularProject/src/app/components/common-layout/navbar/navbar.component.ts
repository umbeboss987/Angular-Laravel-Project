import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ProductsService } from 'src/app/services/products.service';
import { IAppState } from 'src/app/store/state/app.state';
import {select, Store} from '@ngrx/store';
import { ProductsTypeAction } from 'src/app/store/actions/products.actions';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private router : Router, private store : Store<IAppState>, private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit(): void {
  }


  isLoggedIn (){
    return this.authService.isAuthenticated();
  }

  logout(){
    this.authService.logout();
  }

  getAll(type : string)  {
    this.store.dispatch(ProductsTypeAction({type_item : type}));
  }
  

}
