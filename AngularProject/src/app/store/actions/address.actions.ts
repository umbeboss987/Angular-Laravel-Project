import {Action, createAction, props} from '@ngrx/store';
import {Address} from 'src/app/model/Address';



export const CreateAddressAction = createAction('[ADDRESS] Create Address', props<{address: Address}>());
export const CreateAddressActionSuccess = createAction('[ADDRESS] Create Address success', props<{address: Address}>());
export const CreateAddressActionFail = createAction('[ADDRESS] Create Address fail', props<{message: string}>());


export const GetAddressAction = createAction('[ADDRESS] Get address ');
export const GetAddressActionSuccess = createAction('[ADDRESS] Get address success', props<{address: Address[]}>());
export const GetAddressActionFail = createAction('[ADDRESS] Get address fail');

export const GetAddressByIdAction = createAction('[ADDRESS] Get address by id ' , props<{id: number}>());
export const GetAddressByIdActionSuccess = createAction('[ADDRESS] Get address by id success', props<{address: Address}>());
export const GetAddressByIdActionFail = createAction('[ADDRESS] Get address by id fail', props<{message: string}>());

export const UpdateAddressAction = createAction('[ADDRESS] Update address', props<{address: Address}>());
export const UpdateAddressActionSuccess = createAction('[ADDRESS] Update address success', props<{address: Address}>());
export const UpdateAddressActionFail = createAction('[ADDRESS] Update address fail', props<{message: string}>());


 