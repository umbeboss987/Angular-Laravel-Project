import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../model/products';
import { AppConstants } from '../app.constants';


const Url = 'http://127.0.0.1:8000/api/products';
const Url2 = 'http://127.0.0.1:8000/api/product/';

const Url4 =  `${AppConstants.SERVICES_BASE_URL}/products/`

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  product?: Products;

  products?: Array<Products>;
  constructor(private http : HttpClient) { }


  getAll (): Observable<Products[]> {
    return this.http.get<Products[]>(Url);
  }

  getSingleProduct (id: number): Observable<Products[]>{
    const Url3 = `${Url2}${id}` 
    return this.http.get<Products[]>(Url3);
  }

  getProductsType(type: String): Observable<Products[]>{
    console.log(`${Url4}type`);
    return this.http.get<Products[]>(`${Url4}${type}`);
  }

  
}
