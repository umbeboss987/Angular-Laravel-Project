import { state } from "@angular/animations";
import { UpdateUserActionSuccess, UserActionsType, UserLoginAction, UserLoginActionSuccess } from "src/app/store/actions/user.actions";
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
            userAuth: [...state.userAuth ,action.userAuth]
        }
    }),
    on(UpdateUserActionSuccess, (state, action) => {
        return {
            ...state,
            user: [action.user]
        }
    })
)



export function userReducer  (state : any, action : any) {
    return _userReducer(state, action);
};