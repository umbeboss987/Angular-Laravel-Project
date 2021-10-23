import {Action, createAction, props} from '@ngrx/store';
import {Account} from 'src/app/model/account';

export const createAccountAction = createAction('CREATE_ACCOUNT_ACTION', props<{account: Account}>());

export const createAccountActionSuccess = createAction('CREATE_ACCOUNT_ACTION_SUCCESS', props<{account: Account}>());

export const getDetailsAccountAction = createAction('GET_DETAILS_ACCOUNT_ACTION');

export const getDetailsAccountActionSuccess = createAction('GET_DETAILS_ACCOUNT_ACTION_SUCCESS', props<{account: Account}>());
