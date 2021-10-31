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
  { path: 'product/:id', component: ProductComponent },
  { path: 'home', component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:type', component: ProductsComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'cart', component: CartComponent ,canActivate :[AuthGuardService]},
  { path: 'checkOut', component: OrderComponent ,canActivate :[AuthGuardService]},
  { path: 'account', component: ProfileComponent ,canActivate :[AuthGuardService]},
  { path: 'admin', component: AdminComponent ,canActivate :[AuthGuardService]},
  { path: 'test', component: TestComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
