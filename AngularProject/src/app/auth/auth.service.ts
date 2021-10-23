import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import { AppConstants } from '../app.constants';
import { LoginData } from '../model/LoginData';
import { LoginResult } from '../model/LoginResult';

const baseURL = `${AppConstants.SERVICES_BASE_URL}/auth/login`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public httpClient: HttpClient, public jwtHelper: JwtHelperService) { }

  public authenticate(loginData: LoginData): Observable<LoginResult> {
    return this.httpClient
      .post<LoginResult>(baseURL, loginData)
      .pipe(catchError(this.handleError));
  }

  public logout() {
    localStorage.setItem(AppConstants.LOGIN_STORAGE, '');
  }

  get Token() : string { 
    return JSON.stringify(localStorage.getItem('token') || '');
  }

  public isAuthenticated(): boolean {
    let login: LoginResult;
    let loginStr: string | null = localStorage.getItem(
      AppConstants.LOGIN_STORAGE
    );

    if (loginStr !== '' && loginStr !== null && loginStr !== undefined) {
      login = JSON.parse(loginStr);
    } else {
      return false;
    }

    const token = login.token;
    let tokenExpired: boolean = false;

    // Check whether the token is expired and return
    // true or false
    if ( this.jwtHelper.isTokenExpired(token) ) {
      localStorage.setItem(AppConstants.LOGIN_STORAGE, '');
      tokenExpired = true;
    } 

    return !tokenExpired;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned error: ${JSON.stringify(error)}`);
      /* console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${ JSON.stringify(error.error) }`); */
    }
    // return an observable with a user-facing error message
    return throwError(error);
  }

 getTokenDetails(){
  let token = localStorage.getItem('token');
  if (token){
    let token_final = this.getDecodedAccessToken(token);
    return token_final;
    }
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
