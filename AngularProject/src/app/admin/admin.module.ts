import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './AdminComponents/admin-home/admin-home.component';
import { AdminListProductsComponent } from './AdminComponents/admin-list-products/admin-list-products.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersAdminComponent } from './AdminComponents/orders-admin/orders-admin.component';
import { AddProductComponent } from './AdminComponents/add-product/add-product.component';
import { UsersAdminComponent } from './AdminComponents/users-admin/users-admin.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AngularEditorModule } from '@kolkov/angular-editor';

export function httpTranslateLoader(http: HttpClient):any {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    AdminHomeComponent,
    AdminListProductsComponent,
    AdminLayoutComponent,
    OrdersAdminComponent,
    AddProductComponent,
    UsersAdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }), 
    AngularEditorModule
  ]
})
export class AdminModule { }
