import {Action, createAction, props} from '@ngrx/store';
import { User } from 'src/app/model/User';
import { UserAuth } from 'src/app/model/UserAuth';

export enum  UserActionsType {
    SIGN_UP_ACTION = '[User] sign up',
    SIGN_UP_ACTION_SUCCESS ='[User] sign up success',
    LOGIN_ACTION = '[User] login',
    LOGIN_ACTION_SUCCESS ='[User] login success'

}

export const GetUserAction = createAction('[USER] Get user');
export const GetUserActionSuccess = createAction('[USER] Get user success', props<{user: User}>());
export const GetUserActionFail = createAction('[USER] Get user fail', props<{message: string}>());

export const UserSignUpAction = createAction('[USER] Sign up', props<{user: User}>());
export const UserSignUpActionSuccess = createAction('[USER] Sign up success', props<{responseUser: [],user:User}>())
export const UserSignUpActionFail = createAction('[USER] Sign up fail', props<{responseUser: []}>())

export const UserLoginAction = createAction('[USER] Login', props<{user: User}>());
export const UserLoginActionSuccess = createAction('[USER] Login success', props<{responseUser: [],  user:User}>());
export const UserLoginActionFail = createAction('[USER] Login fail', props<{responseUser: []}>());

export const UpdateUserAction = createAction('[USER] Update user', props<{user: User}>());
export const UpdateUserActionSuccess = createAction('[USER] Update user success', props<{user: User}>());
export const UpdateUserActionFail = createAction('[USER] Update user fail', props<{message: string}>());

export const GetAllUserAction = createAction('[USER] Get users');
export const GetAllUserActionSuccess = createAction('[USER] Get user success', props<{ user:User[]}>());
export const GetAllUserActionFail = createAction('[USER] Get users fail', props<{message: string}>());

export const DeleteUserAction = createAction('[USER] Delete user', props<{user_id: number}>());
export const DeleteUserActionSuccess = createAction('[USER] Delete user success', props<{ id: number}>());
export const DeleteUserActionFail = createAction('[USER] Delete user fail', props<{message: string}>());

export const GetUserImageAction = createAction('[USER] Get User photo ');
export const GetUserImageActionSuccess = createAction('[USER] Get User photo success', props<{ image: any}>());
export const GetUserImageActionFail = createAction('[USER] Get User photo fail', props<{message: string}>());

export const AddUserImageAction = createAction('[USER] Add User image ', props<{image : any}>());
export const AddUserImageActionSuccess = createAction('[USER] Add User image success', props<{ image: any}>());
export const AddUserImageActionFail = createAction('[USER] Add User image fail', props<{message: string}>());