import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app.constants';
import { Observable } from 'rxjs';
import { Address } from '../model/Address';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {}

  addAccount(account : Address) : Observable<Address> {
    return this.http.post<Address>(`${AppConstants.SERVICES_BASE_URL}/account`, account);
  }

  getDetailsAccount (){
    return this.http.get<Address>(`${AppConstants.SERVICES_BASE_URL}/getAccountDetails`)
  }

  updateAccount(account : Address){
    return this.http.put<Address>(`${AppConstants.SERVICES_BASE_URL}/updateAccount`, account)
  }
}
