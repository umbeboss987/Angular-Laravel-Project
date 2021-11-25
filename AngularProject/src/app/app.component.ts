import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/product.service';
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
