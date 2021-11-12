import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { ProfileComponent } from './components/private/user/profile/profile.component';
import { AdminComponent } from './components/private/admin/admin.component';
import { TestComponent } from './view/test/test.component';
import { AboutComponent } from './components/about/about.component';
import { OrderListComponent } from './components/private/user/order-list/order-list.component';
import { UpdateProfileComponent } from './components/private/user/update-profile/update-profile.component';
import { UpdateAddressComponent } from './components/private/user/update-address/update-address.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: 'products', loadChildren: () => import ('./components/products/products-module/products-module.module').then(m => m.ProductsModuleModule)},
  { path: 'signIn', component: SignInComponent },
  { path: 'cart', component: CartComponent ,canActivate :[AuthGuardService]},
  { path: 'checkOut', component: OrderComponent ,canActivate :[AuthGuardService]},
  { path: 'account', component: ProfileComponent ,canActivate :[AuthGuardService]},
  { path: 'admin', component: AdminComponent ,canActivate :[AuthGuardService]},
  { path: 'test', component: TestComponent },
  { path: 'about', component: AboutComponent },
  { path: 'account/updateProfile', component: UpdateProfileComponent },
  { path: 'account/updateAddress', component: UpdateAddressComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
