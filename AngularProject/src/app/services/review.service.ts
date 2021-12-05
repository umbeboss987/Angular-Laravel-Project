import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../app.constants';
import { Review } from '../model/Review';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http : HttpClient) {  }

  addReview(review : Review, product_id : number) : Observable<Review> {
   return this.http.post<Review>(`${AppConstants.SERVICES_BASE_URL}/products/${product_id}/reviews`, review)
  }
}
