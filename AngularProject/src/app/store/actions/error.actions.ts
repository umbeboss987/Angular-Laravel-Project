import {Action, createAction, props} from '@ngrx/store';

export const ResponseAction = createAction('RESPONSE_ACTION', props<{message: string}>())
