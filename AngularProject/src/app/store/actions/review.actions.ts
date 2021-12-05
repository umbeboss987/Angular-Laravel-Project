import {Review} from 'src/app/model/Review';
import {Action, createAction, props, union} from '@ngrx/store';


export const AddReviewAction = createAction('[Review] Add review', props<{review : Review, product_id : number}>());
export const AddReviewActionSuccess = createAction('[Review] Add review success', props<{review : Review}>());
export const AddReviewActionFail = createAction('[Review] Add review Fail', props<{review : Review}>());