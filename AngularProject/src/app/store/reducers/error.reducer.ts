import {createReducer, on } from '@ngrx/store';
import {ErrorAction } from 'src/app/store/actions/error.actions';
import { initialErrorState, initialOrderState } from 'src/app/store/state/app.state';

const _errorReducer = createReducer(
    initialErrorState,
    on(ErrorAction, (state, action :any) => {
        return {
            ...state,
            errorMessage: action.errorMessage,
        }
    }),
)

export function errorReducer  (state : any , action : any) {
    return _errorReducer(state, action);
};