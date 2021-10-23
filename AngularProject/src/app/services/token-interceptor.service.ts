import { Injectable , Injector} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private auth_service: AuthService) { }

  intercept(req : HttpRequest<unknown>, next : HttpHandler) {
    let token = localStorage.getItem('token')?.replace(/\"/g, "");
    let tokenRequest = req.clone({
      headers: req.headers.set('Authorization',`Bearer ${token}`)   
    })
    return next.handle(tokenRequest);
  }
}


