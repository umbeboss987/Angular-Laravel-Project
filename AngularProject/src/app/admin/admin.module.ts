import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './AdminComponents/admin-home/admin-home.component';
import { AdminListProductsComponent } from './AdminComponents/admin-list-products/admin-list-products.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    AdminHomeComponent,
    AdminListProductsComponent,
    AdminLayoutComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
