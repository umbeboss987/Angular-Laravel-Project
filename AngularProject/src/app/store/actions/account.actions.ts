import {Action, createAction, props} from '@ngrx/store';
import {Account} from 'src/app/model/account';



export const createAccountAction = createAction('CREATE_ACCOUNT_ACTION', props<{account: Account}>());
export const createAccountActionSuccess = createAction('CREATE_ACCOUNT_ACTION_SUCCESS', props<{account: Account}>());


export const getDetailsAccountAction = createAction('GET_DETAILS_ACCOUNT_ACTION');
export const getDetailsAccountActionSuccess = createAction('GET_DETAILS_ACCOUNT_ACTION_SUCCESS', props<{account: Account}>());

export const updateAccountAction = createAction('UPDATE_ACCOUNT', props<{account: Account}>());
export const updateAccountActionSuccess = createAction('UPDATE_ACCOUNT_SUCCESS', props<{account: Account}>());
export const updateAccountActionFail = createAction('UPDATE_ACCOUNT_FAIL', props<{message: string}>());


