import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './AdminComponents/add-product/add-product.component';
import { AdminHomeComponent } from './AdminComponents/admin-home/admin-home.component';
import { AdminListProductsComponent } from './AdminComponents/admin-list-products/admin-list-products.component';
import { OrdersAdminComponent } from './AdminComponents/orders-admin/orders-admin.component';
import { UsersAdminComponent } from './AdminComponents/users-admin/users-admin.component';

const routes: Routes = [
  {path: '', component:AdminHomeComponent},
  {path: 'products', component:AdminListProductsComponent },
  {path: 'orders', component:OrdersAdminComponent },
  {path: 'products/addProduct', component:AddProductComponent },
  {path: 'users', component:UsersAdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
