import { state } from "@angular/animations";
import { GetUserAction, GetUserActionSuccess, UpdateUserActionSuccess, UserActionsType, UserLoginAction, UserLoginActionFail, UserLoginActionSuccess, UserSignUpActionFail, UserSignUpActionSuccess } from "src/app/store/actions/user.actions";
import { UserState } from "src/app/store/state/app.state";
import {initialUserState} from '../state/app.state';
import {createReducer, on } from '@ngrx/store';




// export function userReducer( state = initialUserState, action : any): UserState {
//     switch (action.type){
//         case  UserActionsType.SIGN_UP_ACTION_SUCCESS:{
//             state.user = action.user;
//             return {
//                 ...state,
//                 user:  [state.user, action.user]
//             }
//         }
//         case  UserActionsType.LOGIN_ACTION_SUCCESS:{
//             return {
//                 ...state,
//                 user: action.user
//             }
//         }
//         default: return state;
//     }
// } 


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
    })
)



export function userReducer  (state : any, action : any) {
    return _userReducer(state, action);
};