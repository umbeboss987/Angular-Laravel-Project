import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './AdminComponents/admin-home/admin-home.component';
import { AdminListProductsComponent } from './AdminComponents/admin-list-products/admin-list-products.component';

const routes: Routes = [
  {path: '', component:AdminHomeComponent },
  {path: 'products', component:AdminListProductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
