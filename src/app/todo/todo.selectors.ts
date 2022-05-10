import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from "./todo.reducer";

export const getState = createFeatureSelector<TodoState>('todo');

export const getItems = createSelector(
  getState,
  state => state.items
);

export const getTotalItems = createSelector(
  getState,
  state => state.items.length
);

export const getRemainingItems = createSelector(
  getState,
  state => state.items.filter(i => !i.isDone).length
);

export const isLoadingTodos = createSelector(
  getState,
  state => state.loadingItems
);
