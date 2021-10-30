import {createReducer, on } from '@ngrx/store';
import {ResponseAction } from 'src/app/store/actions/error.actions';
import { initialResponseState, initialOrderState } from 'src/app/store/state/app.state';

const _responseReducer = createReducer(
    initialResponseState,
    on(ResponseAction, (state, action :any) => {
        return {
            ...state,
            responseData: action.responseData,
        }
    }),
)

export function responseReducer  (state : any , action : any) {
    return _responseReducer(state, action);
};