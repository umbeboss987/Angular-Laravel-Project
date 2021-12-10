import {Action, createAction, props} from '@ngrx/store';
import {Image} from 'src/app/model/Image';

export const AddImageAction = createAction('[IMAGE] Add  photo ', props<{photo: any}>());
export const AddImageActionSuccess = createAction('[IMAGE] Add  photo success', props<{ photo: any}>());
export const AddImageActionFail = createAction('[IMAGE] Add  photo fail', props<{message: string}>());