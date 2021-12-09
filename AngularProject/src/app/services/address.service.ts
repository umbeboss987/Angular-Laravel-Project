import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app.constants';
import { Observable } from 'rxjs';
import { Address } from '../model/Address';


@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) {}

  addAddress(address : Address) : Observable<Address> {
    return this.http.post<Address>(`${AppConstants.SERVICES_BASE_URL}/user/address`, address);
  }

  getUserAddress () : Observable<Address[]>{
    return this.http.get<Address[]>(`${AppConstants.SERVICES_BASE_URL}/user/address`)
  }

  updateAddress(address : Address, address_id : number) : Observable<Address> {
    return this.http.put<Address>(`${AppConstants.SERVICES_BASE_URL}/user/address/${address_id}`, address)
  }

  getAddressById (address_id : number) :Observable<Address> {
    return this.http.get<Address>(`${AppConstants.SERVICES_BASE_URL}/user/address/${address_id}`)
  }
}
