import {Action, createAction, props} from '@ngrx/store';
import {Address} from 'src/app/model/Address';



export const CreateAddressAction = createAction('CREATE_ACCOUNT_ACTION', props<{account: Address}>());
export const CreateAddressActionSuccess = createAction('CREATE_ACCOUNT_ACTION_SUCCESS', props<{account: Address}>());
export const CreateAddressActionFail = createAction('CREATE_ACCOUNT_ACTION', props<{message: string}>());


export const GetDetailsAddressAction = createAction('GET_DETAILS_ACCOUNT_ACTION');
export const GetDetailsAddressActionSuccess = createAction('GET_DETAILS_ACCOUNT_ACTION_SUCCESS', props<{account: Address}>());
export const GetDetailsAddressActionFail = createAction('GET_DETAILS_ACCOUNT_ACTION');

export const UpdateAddressAction = createAction('UPDATE_ACCOUNT', props<{account: Address}>());
export const UpdateAddressActionSuccess = createAction('UPDATE_ACCOUNT_SUCCESS', props<{account: Address}>());
export const UpdateAddressActionFail = createAction('UPDATE_ACCOUNT_FAIL', props<{message: string}>());


