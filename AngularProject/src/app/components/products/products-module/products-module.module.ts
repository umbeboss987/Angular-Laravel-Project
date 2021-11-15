 import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { ProductsModuleRoutingModule } from './products-module-routing.module';
 import {NgxPaginationModule} from 'ngx-pagination';
 import { RouterModule } from '@angular/router';
 import { ProductsComponent } from '../products.component';
 import { StoreRouterConnectingModule } from '@ngrx/router-store';
 import { ProductComponent } from '../../product/product.component';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';




 @NgModule({
   declarations: [
     ProductsComponent, 
     ProductComponent],
   imports: [
     RouterModule,
     NgxPaginationModule,
     CommonModule,
     ReactiveFormsModule,
     FormsModule,
     ProductsModuleRoutingModule,
     StoreRouterConnectingModule.forRoot({
       // serializer: CustomSerializer
       }),
   ]
 })
 export class ProductsModuleModule { }
