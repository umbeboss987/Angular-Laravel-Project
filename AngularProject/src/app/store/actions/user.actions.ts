import {Action, createAction, props} from '@ngrx/store';
import { User } from 'src/app/model/user';
import { UserAuth } from 'src/app/model/userAuth';

export enum  UserActionsType {
    SIGN_UP_ACTION = '[User] sign up',
    SIGN_UP_ACTION_SUCCESS ='[User] sign up success',
    LOGIN_ACTION = '[User] login',
    LOGIN_ACTION_SUCCESS ='[User] login success'

}


export const UserSignUpAction = createAction('SIGN_UP_ACTION', props<{user: User}>());
export const UserSignUpActionSuccess = createAction('SIGN_UP_ACTION_SUCCESS', props<{user: User}>())
export const UserLoginAction = createAction('LOGIN_ACTION', props<{user: User}>());
export const UserLoginActionSuccess = createAction('LOGIN_ACTION_SUCCESS', props<{userAuth: UserAuth}>());
export const UpdateUserAction = createAction('UPDATE_USER_ACTION', props<{user: User}>());
export const UpdateUserActionSuccess = createAction('UPDATE_USER_ACTION_SUCCESS', props<{user: User}>());


