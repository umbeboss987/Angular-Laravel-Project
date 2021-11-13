import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app.constants';
import { Observable } from 'rxjs';
import { Account } from '../model/account';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {}

  addAccount(account : Account) : Observable<Account> {
    return this.http.post<Account>(`${AppConstants.SERVICES_BASE_URL}/account`, account);
  }

  getDetailsAccount (){
    return this.http.get<Account>(`${AppConstants.SERVICES_BASE_URL}/getAccountDetails`)
  }

  updateAccount(account : Account){
    return this.http.put<Account>(`${AppConstants.SERVICES_BASE_URL}/updateAccount`, account)
  }
}
