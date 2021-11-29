import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from '../../home/home.component';
import { ProductsComponent } from '../../products/products.component';
import { SignInComponent } from '../../sign-in/sign-in.component';
import { OrderComponent } from '../../order/order.component';
import { OrderListComponent } from '../../private/user/order-list/order-list.component';
import { ProfileComponent } from '../../private/user/profile/profile.component';
import { UpdateProfileComponent } from '../../private/user/update-profile/update-profile.component';
import { UpdateAddressComponent } from '../../private/user/update-address/update-address.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from '../../cart/cart.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { LayoutComponent } from '../layout/layout.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { UserAddressComponent } from '../../private/user/user-address/user-address.component';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    LayoutComponent,
    HomeComponent,
    SignInComponent,
    OrderComponent,
    OrderListComponent,
    ProfileComponent,
    UpdateAddressComponent,
    UpdateProfileComponent,
    CartComponent,
    FooterComponent,
    NavbarComponent,
    UserAddressComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgxPaginationModule,
    RouterModule,
    ReactiveFormsModule,
    CarouselModule
  ]
})
export class LayoutModule { }
