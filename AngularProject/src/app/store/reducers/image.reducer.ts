import {createReducer, on } from '@ngrx/store';
import { AddImageActionSuccess } from '../actions/image.actions';
import {initialImageState, ImageState } from '../state/app.state';

const _imageReducer = createReducer(
    initialImageState,
    on(AddImageActionSuccess, (state : any, action :any) => {
        return {
            ...state,
            image: action.photo,
        }
    })
)

export function imageReducer  (state : any, action : any) {
    return _imageReducer(state, action);
};