import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../../cart/cart.component';
import { HomeComponent } from '../../home/home.component';
import { OrderComponent } from '../../order/order.component';
import { ProfileComponent } from '../../private/user/profile/profile.component';
import { UpdateAddressComponent } from '../../private/user/update-address/update-address.component';
import { UpdateProfileComponent } from '../../private/user/update-profile/update-profile.component';
import { SignInComponent } from '../../sign-in/sign-in.component';
import{AuthGuardService} from '../../../auth/auth-guard.service';
import { OrderListComponent } from '../../private/user/order-list/order-list.component';
import { UserAddressComponent } from '../../private/user/user-address/user-address.component';


const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'products', loadChildren:() =>import('../../products/products-module/products-module.module').
    then(m => m.ProductsModuleModule)},
  { path: 'signIn', component: SignInComponent},
  {path: 'cart', component: CartComponent, canActivate :[AuthGuardService]},
  {path: 'checkOut', component: OrderComponent, canActivate :[AuthGuardService]},
  {path: 'account', component: ProfileComponent, canActivate :[AuthGuardService]},
  { path: 'account/updateProfile', component: UpdateProfileComponent, canActivate :[AuthGuardService] },
  { path: 'account/address/:id', component: UpdateAddressComponent, canActivate :[AuthGuardService] },
  { path: 'account/orders', component: OrderListComponent, canActivate :[AuthGuardService] },
  { path: 'account/address', component: UserAddressComponent, canActivate :[AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
