 import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { ProductsModuleRoutingModule } from './products-module-routing.module';
 import {NgxPaginationModule} from 'ngx-pagination';
 import { RouterModule } from '@angular/router';
 import { ProductsComponent } from '../products.component';
 import { StoreRouterConnectingModule } from '@ngrx/router-store';
 import { ProductComponent } from '../../product/product.component';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
 import { TranslateHttpLoader } from '@ngx-translate/http-loader';
 import { HttpClient } from '@angular/common/http';


 export function httpTranslateLoader(http: HttpClient):any {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


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
       TranslateModule.forChild({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: httpTranslateLoader,
          deps: [HttpClient]
        }
      }), 
   ]
 })
 export class ProductsModuleModule { }
