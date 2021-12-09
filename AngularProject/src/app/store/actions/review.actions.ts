import {Review} from 'src/app/model/Review';
import {Action, createAction, props, union} from '@ngrx/store';



export const AddReviewAction = createAction('[Review] Add review', props<{review : Review, product_id : number}>());
export const AddReviewActionSuccess = createAction('[Review] Add review success', props<{review : Review}>());
export const AddReviewActionFail = createAction('[Review] Add review Fail', props<{review : Review}>());

export const GetReviewsProductAction = createAction('[Review] Get review product', props<{ product_id : number}>());
export const GetReviewsProductActionSuccess = createAction('[Review] Get review product success', props<{review : Review}>());
export const GetReviewsProductActionFail = createAction('[Review] Get review product Fail', props<{review : Review}>());

export const DeleteProductReviewAction = createAction('[Review] delete review product', props<{ product_id : number, review_id : number}>());
export const DeleteProductReviewActionSuccess = createAction('[Review] delete review product success', props<{review_id : number}>());
export const DeleteProductReviewActionFail = createAction('[Review] delete review product Fail', props<{review : Review}>());