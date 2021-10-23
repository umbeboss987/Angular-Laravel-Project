import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { ProductComponent } from './views/product/product.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { CartComponent } from './views/cart/cart.component';
import { OrderComponent } from './views/order/order.component';
import { ProfileComponent } from './views/profile/profile.component';
import { AdminComponent } from './views/private/admin/admin.component';
import { TestComponent } from './view/test/test.component';

const routes: Routes = [
  { path: 'product/:id', component: ProductComponent, canActivate :[AuthGuardService] },
  { path: 'home', component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:type', component: ProductsComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'cart', component: CartComponent },
  { path: 'addCartItem/:id', component: ProductComponent },
  { path: 'checkOut', component: OrderComponent },
  { path: 'account', component: ProfileComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'test', component: TestComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
