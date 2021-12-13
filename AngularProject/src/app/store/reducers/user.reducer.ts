import { state } from "@angular/animations";
import {  AddUserImageActionSuccess, DeleteUserActionSuccess, GetAllUserActionSuccess, GetUserAction, GetUserActionSuccess, GetUserImageActionSuccess,UpdateUserActionSuccess,UserLoginActionFail, UserLoginActionSuccess, UserSignUpActionFail, UserSignUpActionSuccess } from "src/app/store/actions/user.actions";
import { UserState } from "src/app/store/state/app.state";
import {initialUserState} from '../state/app.state';
import {createReducer, on } from '@ngrx/store';


const _userReducer = createReducer(
    initialUserState,
    on(UserLoginActionSuccess, (state, action) => {
        return {
            ...state,
            responseUser: action.responseUser,
            singleUser: action.user  
        }
    }), 
    on(UserSignUpActionSuccess, (state, action) => {
        return {
            ...state,
            responseUser: action.responseUser, 
            singleUser: action.user
        }
    }), 
    on(UserSignUpActionFail, (state, action) => {
        return {
            ...state,
            responseUser: action.responseUser  
        }
    }), 
    on(UserLoginActionFail, (state, action) => {
        return {
            ...state,
            responseUser: action.responseUser
        }
    }),
    on(UpdateUserActionSuccess, (state, action) => {
        return {
            ...state,
            singleUser: action.user
        }
    }),
    on(GetUserAction, (state, action) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(GetUserActionSuccess, (state, action) => {
        return {
            ...state,
            singleUser: action.user,
            loading: false
        }
    }),
    on(GetAllUserActionSuccess, (state, action) => {
        return {
            ...state,
            user: action.user,
            loading: false
        }
    }),
    on(DeleteUserActionSuccess, (state, action) => {
        let updateUsers = state.user.filter(user => {
          return  user.id != action.id;
        })
        return {
            ...state,
            user: updateUsers,
            loading: false
        }
    }),
    on(GetUserImageActionSuccess, (state, action) => {
        return {
            ...state,
            userImage: action.image,
            loading: false
        }
    }),
    on(AddUserImageActionSuccess, (state, action) => {
        return {
            ...state,
            userImage: action.image,
            loading: false
        }
    }),

)



export function userReducer  (state : any, action : any) {
    return _userReducer(state, action);
};