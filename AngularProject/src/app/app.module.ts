import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffect } from 'src/app/store/effects/product.effects';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';
import { appReducers } from 'src/app/store/reducers/app.reducer';
import { CartEffects } from 'src/app/store/effects/cart.effects';
import { UserEffects } from 'src/app/store/effects/user.effects';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { JwtModule } from "@auth0/angular-jwt";
import { OrderEffects } from 'src/app/store/effects/order.effects';
import { AccountEffects } from './store/effects/address.effects';
import {NgxPaginationModule} from 'ngx-pagination';
import {RouterModule} from '@angular/router';


export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
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
    RouterModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    CommonModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([ProductsEffect, CartEffects, UserEffects, OrderEffects, AccountEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
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
export class AppModule { 
 }
