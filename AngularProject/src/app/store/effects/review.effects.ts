import { Actions, ofType,createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, map , mergeMap, filter, withLatestFrom, tap, catchError, exhaustMap, } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { ReviewService } from 'src/app/services/review.service';
import { AddReviewAction, AddReviewActionFail, AddReviewActionSuccess } from '../actions/review.actions';



export class ReviewEffects {

 constructor(private review_service: ReviewService, private actions$ : Actions){}

    addReview$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(AddReviewAction),
            switchMap(action => {
                return this.review_service.addReview(action.review, action.product_id).pipe(
                    map((product) => AddReviewActionSuccess({ review: action.review }))
                )
            }),
            catchError((error) => {
                return of(AddReviewActionFail({ review: error.error.message }))
            })
        )
    })

}