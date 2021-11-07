import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../../product/product.component';
import { ProductsComponent } from '../products.component';

const routes: Routes = [
  { path: ':type', component:ProductsComponent},
  { path: 'product/:id', component:ProductComponent},
  { path: '', component:ProductsComponent},

];

@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(routes)],
  
  exports: [RouterModule]
})
export class ProductsModuleRoutingModule { }
