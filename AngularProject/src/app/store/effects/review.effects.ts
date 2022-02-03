import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, map, tap, catchError, } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { ReviewService } from 'src/app/services/review.service';
import { AddReviewAction, AddReviewActionFail, AddReviewActionSuccess, DeleteProductReviewAction, DeleteProductReviewActionFail, DeleteProductReviewActionSuccess, GetReviewsProductAction, GetReviewsProductActionSuccess, } from '../actions/review.actions';
import { Router } from '@angular/router';


@Injectable()

export class ReviewEffects {

    constructor(private review_service: ReviewService, private actions$: Actions, private router: Router) { }

    addReview$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(AddReviewAction),
            switchMap(action => {
                return this.review_service.addReview(action.review, action.product_id).pipe(
                    map(() => AddReviewActionSuccess({ review: action.review }),
                    this.router.navigate([`/products/${action.product_id}`])
                    ),
                    catchError((error) => {
                        return of(AddReviewActionFail({ review: error.error.message }))
                    })
                )
            }),

        )
    })


    getReviewsProduct$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(GetReviewsProductAction),
            switchMap(action => {
                return this.review_service.getReviewsProduct(action.product_id).pipe(
                    map((reviews) => GetReviewsProductActionSuccess({ review: reviews })),
                    catchError((error) => {
                        return of(AddReviewActionFail({ review: error.error.message }))
                    })
                )
            })          
        )
    })

    deleteProductReview$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(DeleteProductReviewAction),
            switchMap(action => {
                return this.review_service.deleteProductReview(action.product_id, action.review_id).pipe(
                    map((reviews) => DeleteProductReviewActionSuccess({ review_id: action.review_id })),
                    catchError((error) => {
                        return of(DeleteProductReviewActionFail({ review: error.error.message }))
                    })
                )
            }),

        )
    })

}