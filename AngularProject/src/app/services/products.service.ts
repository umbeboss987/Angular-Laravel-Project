import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../model/products';
import { AppConstants } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  product?: Products;

  products?: Array<Products>;
  constructor(private http : HttpClient) { }


  getAll (): Observable<Products[]> {
    return this.http.get<Products[]>(`${AppConstants.SERVICES_BASE_URL}/products`);
  }

  getSingleProduct (id: number): Observable<Products>{
    return this.http.get<Products>(`${AppConstants.SERVICES_BASE_URL}/products?product=${id}`);
  }

  getProductsType(type: String): Observable<Products[]>{
    return this.http.get<Products[]>(`${AppConstants.SERVICES_BASE_URL}/products/${type}`);
  }

  
}
