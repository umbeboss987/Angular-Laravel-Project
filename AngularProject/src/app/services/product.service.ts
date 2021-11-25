import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';
import { AppConstants } from '../app.constants';


const HttpUploadOptions = {
  headers: new HttpHeaders({'Content-type': 'undefined;'})
}
@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  product?: Product;

  products?: Array<Product>;
  constructor(private http : HttpClient) { }


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${AppConstants.SERVICES_BASE_URL}/products`);
  }

  getSingleProduct (id: number): Observable<Product>{
    return this.http.get<Product>(`${AppConstants.SERVICES_BASE_URL}/products/${id}`);
  }

  getProductsType(type: String): Observable<Product[]>{
    return this.http.get<Product[]>(`${AppConstants.SERVICES_BASE_URL}/products/${type}`);
  }

  deleteProduct(product_id: number): Observable<Product>{
    return this.http.delete<Product>(`${AppConstants.SERVICES_BASE_URL}/products/${product_id}`);
  }

  updateProduct (product: any, product_id : number): Observable<any>{
    return this.http.post<any>(`${AppConstants.SERVICES_BASE_URL}/products/${product_id}`, product);
  }

  addProduct(product: Product) : Observable <Product>{
    return this.http.post<Product>(`${AppConstants.SERVICES_BASE_URL}/products`, product);
  }
  
}
