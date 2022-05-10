import { createAction, props } from '@ngrx/store';

export const increment = createAction('Increment', props<{ by: number }>());
export const reset = createAction('Reset');