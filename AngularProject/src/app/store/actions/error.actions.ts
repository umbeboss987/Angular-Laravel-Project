import {Action, createAction, props} from '@ngrx/store';

export const ErrorAction = createAction('ERROR_ACTION', props<{message: string}>())
