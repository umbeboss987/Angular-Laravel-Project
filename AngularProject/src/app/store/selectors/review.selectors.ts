import { ActivatedRoute } from '@angular/router';
import {createSelector} from '@ngrx/store';
import { Review } from 'src/app/model/Review';
import {IAppState, ReviewState} from '../state/app.state';





const selectReviews = (state: IAppState) => {
    return state.reviewState;
};


export const selectReviewsList = createSelector(
    selectReviews,
    (state: ReviewState) => {
        return state.reviews;
    }
);

export const selectProductReviews = createSelector(
    selectReviews,
    (state: ReviewState) => {
        return state.reviewsProduct;
    }
);