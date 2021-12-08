import {initialProductsState, initialReviewState, ProductsState } from '../state/app.state';
import {createReducer, on } from '@ngrx/store';
import { Review } from 'src/app/model/Review';
import { AddReviewActionSuccess, DeleteProductReviewAction, DeleteProductReviewActionSuccess, GetReviewsProductActionSuccess } from '../actions/review.actions';



const _reviewReducer = createReducer(initialReviewState, 
     on(AddReviewActionSuccess, (state, action :any) => {
         return {
             ...state,
             reviews : action.review
         }
     }),
     on(GetReviewsProductActionSuccess, (state, action :any) => {
        return {
            ...state,
            reviews: action.review
        }
    }),
     on(DeleteProductReviewActionSuccess, (state, action :any) => {
        return {
            ...state,
            reviewsProduct: action.review
        }
    }),
)

export function reviewReducer  (state : any, action : any) {
    return _reviewReducer(state, action);
};