import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(public router: Router){}  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthorized(route);
  }

  isAuthorized (route : ActivatedRouteSnapshot): boolean{
    let token = localStorage.getItem('token');
     if (token === '' || token === undefined || token === null){
          return false;
        } else {
          let user_details = this.getDecodedAccessToken(token);
          if(user_details.role === route.data.expectedRoles){
            return true
          }
      }  
      this.router.navigateByUrl('/home');
      return false;
    }

  
   getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }
  
}
