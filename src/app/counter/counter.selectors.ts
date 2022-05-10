import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.reducer";

export const getState = createFeatureSelector<CounterState>('counter');

export const getCount = createSelector(
  getState,
  state => state.count
);
