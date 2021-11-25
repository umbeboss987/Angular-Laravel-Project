import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { LayoutComponent } from './components/common-layout/layout/layout.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: "", component: HomeComponent },
  // //{ path: 'products', loadChildren: () => import ('./components/products/products-module/products-module.module').then(m => m.ProductsModuleModule)},
  // { path: 'signIn', component: SignInComponent },
  // { path: 'cart', component: CartComponent ,canActivate :[AuthGuardService]},
  // { path: 'checkOut', component: OrderComponent ,canActivate :[AuthGuardService]},
  // { path: 'account', component: ProfileComponent ,canActivate :[AuthGuardService]},
  // { path: 'test', component: TestComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'account/updateProfile', component: UpdateProfileComponent },
  // { path: 'account/updateAddress', component: UpdateAddressComponent },
  
  {path: 'admin' ,component: AdminLayoutComponent,
  children: [
    { path: '', loadChildren:() =>import('./admin/admin.module').
    then(m => m.AdminModule)
    }

    ]

  },
  {
    path: '', component: LayoutComponent,
    children:[
      { path: '', loadChildren:() =>import('./components/common-layout/layout-module/layout.module').
      then(m => m.LayoutModule)
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation : 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
