import { createReducer, on } from '@ngrx/store';
import { increment, reset } from './counter.actions';

export interface CounterState {
  count: number;
}

export const counterReducer = createReducer<CounterState>(
  { count: 0 },
  on(increment, (state, action) => ({ count: state.count + action.by })),
  on(reset, (state) => ({ count: 0 }))
);