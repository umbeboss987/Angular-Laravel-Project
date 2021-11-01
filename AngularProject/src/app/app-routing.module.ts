import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/private/admin/admin.component';
import { TestComponent } from './view/test/test.component';
import { AboutComponent } from './components/about/about.component';

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
  { path: 'about', component: AboutComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
