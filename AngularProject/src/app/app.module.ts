import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/app/views/home/home.component';
import { AboutComponent } from 'src/app/views/about/about.component';
import { ProductsComponent } from 'src/app/views/products/products.component';
import { ProfileComponent } from './views/profile/profile.component';
import { StoreModule } from '@ngrx/store';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductComponent } from './views/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffect } from 'src/app/store/effects/products.effects';
import { productsReducer } from 'src/app/store/reducers/products.reducer';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';
import { appReducers } from 'src/app/store/reducers/app.reducer';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';
import { CustomSerializer } from 'src/app/store/selectors/custom-serializer';
import { CartEffects } from 'src/app/store/effects/cart.effects';
import { UserEffects } from 'src/app/store/effects/user.effects';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { JwtModule } from "@auth0/angular-jwt";
import { CartComponent } from './views/cart/cart.component';
import { OrderComponent } from './views/order/order.component';
import { OrderEffects } from 'src/app/store/effects/order.effects';
import { AccountEffects } from './store/effects/account.effects';
import { AdminComponent } from './views/private/admin/admin.component';
import { TestComponent } from './view/test/test.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProfileComponent,
    ProductComponent,
    ProductsComponent,
    SignInComponent,
    CartComponent,
    OrderComponent,
    AdminComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    CommonModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([ProductsEffect, CartEffects, UserEffects, OrderEffects, AccountEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot({
     // serializer: CustomSerializer
     }),
     JwtModule.forRoot({
      config: { //aggiunge athorization header
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:8000"],
      },
    }),
    ],    
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
