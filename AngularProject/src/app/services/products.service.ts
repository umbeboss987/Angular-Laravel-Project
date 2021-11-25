import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../model/products';
import { AppConstants } from '../app.constants';


const HttpUploadOptions = {
  headers: new HttpHeaders({'Content-type': 'undefined;'})
}
@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  product?: Products;

  products?: Array<Products>;
  constructor(private http : HttpClient) { }


  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`${AppConstants.SERVICES_BASE_URL}/products`);
  }

  getSingleProduct (id: number): Observable<Products>{
    return this.http.get<Products>(`${AppConstants.SERVICES_BASE_URL}/products/${id}`);
  }

  getProductsType(type: String): Observable<Products[]>{
    return this.http.get<Products[]>(`${AppConstants.SERVICES_BASE_URL}/products/${type}`);
  }

  deleteProduct(product_id: number): Observable<Products>{
    return this.http.delete<Products>(`${AppConstants.SERVICES_BASE_URL}/products/${product_id}`);
  }

  updateProduct (product: any, product_id : number): Observable<any>{
    return this.http.post<any>(`${AppConstants.SERVICES_BASE_URL}/updateProduct/${product_id}`, product);
  }

  addProduct(product: Products) : Observable <Products>{
    return this.http.post<Products>(`${AppConstants.SERVICES_BASE_URL}/products`, product);
  }
  
}
